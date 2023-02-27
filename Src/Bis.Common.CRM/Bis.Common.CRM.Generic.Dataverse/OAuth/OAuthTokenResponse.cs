using Newtonsoft.Json;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    /// <summary>
    /// Represents an access token returned by an OAuth provider.
    /// </summary>
    public class OAuthTokenResponse
    {
        /// <summary>
        /// Indicates the token type value.
        /// </summary>
        [JsonProperty("token_type")]
        public string TokenType { get; set; }

        /// <summary>
        /// The amount of time that an access token is valid (in seconds).
        /// </summary>
        [JsonProperty("expires_in")]
        public int ExpiresIn { get; set; }

        /// <summary>
        /// Resource the access has been granted to.
        /// </summary>
        [JsonProperty("resouce")]
        public string Resource { get; set; }

        /// <summary>
        /// The requested access token.
        /// </summary>
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }
    }
}
