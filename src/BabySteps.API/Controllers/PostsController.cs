using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using src.BabySteps.Domain;
using src.BabySteps.Persistance;

namespace src.BabySteps.API.Controllers
{
    public class PostsController : BaseApiController
    {
        private readonly DataContext _context;
        public PostsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IList<Post>>> GetPosts() => await _context.Posts.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(Guid id) => await _context.Posts.FindAsync(id);
    }
}