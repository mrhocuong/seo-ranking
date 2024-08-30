namespace SeoRanking.Infrastructure.Configuration;

public class SearchEngineOptions
{
    public SearchEngineConfig Google { get; set; }
}

public class SearchEngineConfig
{
    public string Url { get; set; }
    public int Limit { get; set; }
}