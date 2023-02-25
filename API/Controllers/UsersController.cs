using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.Users;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers(CancellationToken ct)
        {
            return await Mediator.Send(new List.Query(),ct);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(long id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            return Ok(await Mediator.Send(new Create.Command { User = user }));
        }

        [HttpPut("id")]
        public async Task<IActionResult> EditUser(long id, User user)
        {
            user.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { User = user }));
        }

        [HttpDelete("id")]
        public async Task<IActionResult> DeleteUser(long id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }

    }
}