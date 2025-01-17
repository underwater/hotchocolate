using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate.Execution;

namespace HotChocolate.Stitching.Pipeline;

public interface IHttpStitchingRequestInterceptor
{
    ValueTask OnCreateRequestAsync(
        string targetSchema,
        IQueryRequest request,
        HttpRequestMessage requestMessage,
        CancellationToken cancellationToken = default);

    ValueTask<IQueryResult> OnReceivedResultAsync(
        string targetSchema,
        IQueryRequest request,
        IQueryResult result,
        HttpResponseMessage responseMessage,
        CancellationToken cancellationToken = default);
}
