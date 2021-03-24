using System.Threading;
using System.Threading.Tasks;
using MediatR;
using src.BabySteps.Application.Core;
using src.BabySteps.Domain;
using src.BabySteps.Persistance;

namespace src.BabySteps.Application.Posts
{
    public class CreatePost
    {
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Posts.Add(request.Post);
                var wasCreated = await _context.SaveChangesAsync() > 0;

                return wasCreated ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Postitust ei saanud luua", null);
            }
        }

        public class Command : IRequest<Result<Unit>>
        {
            public Post Post { get; set; }
        }
    }
}