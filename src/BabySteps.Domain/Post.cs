using System;

namespace src.BabySteps.Domain
{
    public class Post
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime? Date { get; set; }
        public DateTime InsertDate { get; set; }
        public string Content { get; set; }
        
        public DateTime? DeleteDate { get; set; }
    }
}