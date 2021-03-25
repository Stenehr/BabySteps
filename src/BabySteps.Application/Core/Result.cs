namespace src.BabySteps.Application.Core
{
    public enum ErrorType
    {
        NotFound,
        DatabaseChangesFailed
    }

    public class Result<T>
    {
        public T Value { get; set; }
        public bool IsSuccess { get; set; }
        public string ErrorMessage { get; set; }
        public ErrorType? ErrorType { get; set; }

        public static Result<T> Success(T value) => new Result<T> { Value = value, IsSuccess = true };
        public static Result<T> Failure(string errorMessage, ErrorType? errorType) => new Result<T> { IsSuccess = false, ErrorMessage = errorMessage, ErrorType = errorType };
  }
}