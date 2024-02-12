using MediatR;
using Persistence;

namespace Application.Core
{
    public partial class Delete
    {
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
               var activity = await _context.Activities.FindAsync(request.Id);

               _context.Remove(activity);

               await _context.SaveChangesAsync();
            }
        }
    }
}