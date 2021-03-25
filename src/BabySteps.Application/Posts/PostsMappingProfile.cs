using AutoMapper;
using src.BabySteps.Domain;

namespace src.BabySteps.Application.Posts
{
    public class PostsMappingProfile : Profile
    {
        public PostsMappingProfile()
        {
            CreateMap<Post, Post>();
        }
    }
}