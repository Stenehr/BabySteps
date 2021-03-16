using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using src.BabySteps.Domain;
using src.BabySteps.Persistance;

namespace src.BabySteps.Application.Posts
{
    public class PostList
    {
        public class Handler : IRequestHandler<Query, List<Post>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Posts.ToListAsync();
            }
        }

        public class Query : IRequest<List<Post>>
        { }
    }
}