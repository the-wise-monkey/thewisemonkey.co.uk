import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type GhostPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  published_at?: string;
  feature_image?: string | null;
};

const BLOG_BASE_URL = "https://thewisemonkey.co.uk/blog";
const GHOST_CONTENT_API_URL = "https://blog.thewisemonkey.co.uk/ghost/api/content";
const GHOST_CONTENT_API_KEY = import.meta.env.VITE_GHOST_CONTENT_API_KEY;

const fetchLatestPosts = async (): Promise<GhostPost[]> => {
  if (!GHOST_CONTENT_API_KEY) return [];

  const params = new URLSearchParams({
    key: GHOST_CONTENT_API_KEY,
    limit: "3",
    fields: "id,title,slug,excerpt,published_at,feature_image",
    include: "tags",
  });

  const response = await fetch(`${GHOST_CONTENT_API_URL}/posts/?${params.toString()}`);
  if (!response.ok) {
    throw new Error("failed-to-load-posts");
  }

  const data = await response.json();
  return data.posts ?? [];
};

const formatDate = (dateString: string | undefined, locale: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date);
};

const LatestPosts = () => {
  const { t, i18n } = useTranslation();
  const { data: posts = [], isLoading, isError } = useQuery({
    queryKey: ["latest-posts"],
    queryFn: fetchLatestPosts,
    enabled: Boolean(GHOST_CONTENT_API_KEY),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const uniquePosts = Array.from(
    new Map(posts.map((post) => [post.slug || post.id, post])).values()
  );

  const hasPosts = uniquePosts.length > 0;
  const shouldShowFallback = !GHOST_CONTENT_API_KEY || (!isLoading && !hasPosts);

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase text-primary font-semibold">
            {t("blog.kicker")}
          </p>
          <h2 className="text-4xl font-medium mt-3 text-foreground">{t("blog.title")}</h2>
          <p className="text-muted-foreground mt-4">{t("blog.subtitle")}</p>
        </div>

        {isLoading && (
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="h-full rounded-xl border border-border bg-card shadow-sm p-4 animate-pulse"
              >
                <div className="h-40 w-full rounded-lg bg-muted mb-4" />
                <div className="h-4 bg-muted rounded mb-2 w-2/3" />
                <div className="h-4 bg-muted rounded mb-2 w-full" />
                <div className="h-4 bg-muted rounded mb-2 w-5/6" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {!isLoading && hasPosts && (
          <div className="grid gap-6 md:grid-cols-3">
            {uniquePosts.map((post) => (
              <Card key={post.id || post.slug} className="h-full overflow-hidden border-border">
                {post.feature_image && (
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={post.feature_image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardHeader>
                  <p className="text-xs uppercase text-muted-foreground">
                    {t("blog.published", { date: formatDate(post.published_at, i18n.language) })}
                  </p>
                  <CardTitle className="text-xl leading-tight text-foreground">{post.title}</CardTitle>
                  {post.excerpt && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt.trim()}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0 text-primary">
                    <a
                      href={`${BLOG_BASE_URL}/${post.slug}/?utm_source=website&utm_medium=referral`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t("blog.readPost", { title: post.title })}
                    >
                      {t("blog.readMore")}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!isLoading && (isError || shouldShowFallback) && (
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="text-foreground font-semibold text-lg">
              {t(isError ? "blog.errorTitle" : "blog.fallbackTitle")}
            </p>
            <p className="text-muted-foreground mt-2">
              {t(isError ? "blog.errorSubtitle" : "blog.fallbackSubtitle")}
            </p>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Button asChild variant="secondary" size="lg">
            <a
              href={`${BLOG_BASE_URL}?utm_source=website&utm_medium=referral`}
              target="_blank"
              rel="noreferrer"
            >
              {t("blog.viewAll")}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
