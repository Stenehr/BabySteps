using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using src.BabySteps.Application.Core;
using src.BabySteps.Domain;
using src.BabySteps.Persistance;

namespace src.BabySteps.Application.Posts
{
    public class PostDetails
    {
        public class Handler : IRequestHandler<Query, Result<Post>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                var post = await _context.Posts.FindAsync(request.Id);

                return post != null ? Result<Post>.Success(post) : Result<Post>.Failure(ErrorMessages.NotFound, ErrorType.NotFound);
            }
        }

        public class Query : IRequest<Result<Post>>
        {
            public Guid Id { get; }

            public Query(Guid id)
            {
                Id = id;
            }
        }
    }
}