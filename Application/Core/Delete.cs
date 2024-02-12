using MediatR;

namespace Application.Core
{
    public partial class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }
    }
}