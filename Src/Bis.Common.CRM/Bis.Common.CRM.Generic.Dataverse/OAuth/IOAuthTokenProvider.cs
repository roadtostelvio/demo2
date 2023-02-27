using System.Threading.Tasks;

namespace Bis.Common.CRM.Generic.Dataverse.Extensions
{
    public interface IOAuthTokenProvider
    {
        Task<OAuthTokenResponse> GetTokenAsync();
    }
}
