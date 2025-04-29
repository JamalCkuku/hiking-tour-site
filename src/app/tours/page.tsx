// src/app/tours/page.tsx
import { getStoryblokApi } from "@/storyblok";
import { RecommendedTour } from "@/components/RecommendedTour";

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const { data } = await client.get("cdn/stories", {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    starts_with: "tours/",
    is_startpage: false,
  });
  return data.stories;
};

const ToursPage = async () => {
  const tours = await fetchAllTours();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-8">All Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour: any) => (
          <RecommendedTour story={tour} key={tour.uuid} />
        ))}
      </div>
    </main>
  );
};

export default ToursPage;
