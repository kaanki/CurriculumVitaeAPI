using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Users
{
    public class Edit
    {
        public class Command : IRequest
        {
            public User User { get; set; }
        };

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public IMapper _mapper { get; set; }
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public IMapper Mapper { get; }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FindAsync(request.User.Id);

                _mapper.Map(request.User, user);

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}