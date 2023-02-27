using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    public class MicrosoftOAuthTokenProvider : IOAuthTokenProvider
    {
        private readonly string Tenant;

        private readonly string ClientId;

        public readonly string ClientSecret;

        public readonly string Scope;

        public readonly string Version;

        /// <summary>
        /// Creates an access token provider using a client id and a client secret for the specified scope.
        /// </summary>
        /// <param name="tenant">The directory tenant the application plans to operate against, in GUID or domain-name format.</param>
        /// <param name="clientId">The application ID that's assigned to your app. You can find this information in the portal where you registered your app.</param>
        /// <param name="clientSecret">The client secret that you generated for your app in the app registration portal.</param>
        /// <param name="scope">The value passed for the scope parameter in this request should be the resource identifier (application ID URI) of the resource you want.</param>
        /// <param name="version">Version of the OAuth service to authenticate with. Defaults to v2.0.</param>
        /// <returns></returns>
        public MicrosoftOAuthTokenProvider(string tenant, string clientId, string clientSecret, string scope, string version = "v2.0")
        {
            Tenant = tenant ?? throw new ArgumentNullException(nameof(tenant));
            ClientId = clientId ?? throw new ArgumentNullException(nameof(clientId));
            ClientSecret = clientSecret ?? throw new ArgumentNullException(nameof(clientSecret));
            Scope = scope ?? throw new ArgumentNullException(nameof(scope));
            Version = version ?? throw new ArgumentNullException(nameof(version));
        }

        private OAuthTokenResponse _tokenCache = null;
        private DateTime _tokenExpiresIn = DateTime.UtcNow;

        /// <summary>
        /// Returns an access token using the client id and a client secret for the specified scope.
        /// </summary>
        /// <returns></returns>
        public async Task<OAuthTokenResponse> GetTokenAsync()
        {
            if (_tokenCache == null || _tokenExpiresIn < DateTime.UtcNow)
            {
                var httpClient = new HttpClient();
                httpClient.BaseAddress = new Uri("https://login.microsoftonline.com");

                var queryParamContent = new FormUrlEncodedContent(new List<KeyValuePair<string, string>>()
                {
                    new KeyValuePair<string, string>("client_id", ClientId),
                    new KeyValuePair<string, string>("client_secret", ClientSecret),
                    new KeyValuePair<string, string>("scope", Scope),
                    new KeyValuePair<string, string>("grant_type", "client_credentials")
                });

                var httpResponse = await httpClient.PostAsync($"{Tenant}/oauth2/{Version}/token", queryParamContent);
                httpResponse.EnsureSuccessStatusCode();

                _tokenCache = JsonConvert.DeserializeObject<OAuthTokenResponse>(await httpResponse.Content.ReadAsStringAsync());
                _tokenExpiresIn = DateTime.UtcNow.AddSeconds(_tokenCache.ExpiresIn - 60);
            }

            return _tokenCache;
        }
    }
}
