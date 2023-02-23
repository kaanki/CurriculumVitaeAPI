using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(long id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

    }
}