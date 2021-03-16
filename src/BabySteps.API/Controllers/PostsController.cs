using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using src.BabySteps.Application.Posts;
using src.BabySteps.Domain;

namespace src.BabySteps.API.Controllers
{
    public class PostsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<IList<Post>>> GetPosts() => await Mediator.Send(new PostList.Query());

        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(Guid id) => await Mediator.Send(new PostDetails.Query(id));
    }
}