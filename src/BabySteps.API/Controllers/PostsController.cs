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
        public async Task<ActionResult> GetPosts() => HandleResult(await Mediator.Send(new PostList.Query()));

        [HttpGet("{id}")]
        public async Task<ActionResult> GetPost(Guid id) => HandleResult(await Mediator.Send(new PostDetails.Query(id)));

        [HttpPost]
        public async Task<ActionResult> CreatePost(Post post) => HandleResult(await Mediator.Send(new CreatePost.Command{ Post = post }));
  }
}