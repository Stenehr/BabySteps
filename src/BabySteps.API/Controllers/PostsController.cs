using System;
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
        public async Task<ActionResult> CreatePost(Post post) => HandleResult(await Mediator.Send(new CreatePost.Command { Post = post }));

        [HttpPut("{id}")]
        public async Task<ActionResult> EditPost(Guid id, Post post)
        {
            post.Id = id;
            return HandleResult(await Mediator.Send(new EditPost.Command { Post = post }));
        }
  }
}