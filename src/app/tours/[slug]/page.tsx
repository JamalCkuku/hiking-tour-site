import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import { getStoryblokApi } from "@/storyblok";

// ✅ Fetch tour story by slug (used in the page itself)
const fetchTourPage = async (slug: string) => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();

  const version =
    isEnabled || process.env.NODE_ENV === "development"
      ? "draft"
      : "published";

  const response = await client.getStory(`tours/${slug}`, {
    version,
  });

  return response.data.story;
};

// ✅ Page component
const TourPage = async ({ params }: { params: { slug: string } }) => {
  const story = await fetchTourPage(params.slug);
  return <StoryblokStory story={story} />;
};

export default TourPage;

// ✅ Safe generateStaticParams using fetch (no getStoryblokApi)
export async function generateStaticParams() {
  const token = process.env.STORYBLOK_API_TOKEN;

  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?starts_with=tours/&version=published&token=${token}`
  );

  if (!res.ok) {
    console.error("Failed to fetch stories from Storyblok");
    return [];
  }

  const data = await res.json();

  return data.stories.map((story: any) => ({
    slug: story.slug.replace("tours/", ""),
  }));
}
