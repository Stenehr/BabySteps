using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using src.BabySteps.Application.Core;
using src.BabySteps.Domain;
using src.BabySteps.Persistance;

namespace src.BabySteps.Application.Posts
{
    public class EditPost
    {
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await _context.Posts.FindAsync(request.Post.Id);
                if (post == null)
                    return Result<Unit>.Failure(ErrorMessages.NotFound, ErrorType.DatabaseChangesFailed);

                _mapper.Map(request.Post, post);

                var madeChanges = await _context.SaveChangesAsync() > 0;

                return madeChanges ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure(ErrorMessages.FailedEdit, ErrorType.DatabaseChangesFailed);
            }
        }

        public class Command : IRequest<Result<Unit>>
        {
            public Post Post { get; set; }
        }
    }
}