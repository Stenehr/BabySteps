using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using src.BabySteps.Domain;
using src.BabySteps.Persistance;

namespace src.BabySteps.Application.Posts
{
    public class PostDetails
    {
        public class Handler : IRequestHandler<Query, Post>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Post> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Posts.FindAsync(request.Id);
            }
        }

        public class Query : IRequest<Post>
        {
            public Guid Id { get; }

            public Query(Guid id)
            {
                Id = id;
            }
        }
    }
}