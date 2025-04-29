import Link from "next/link";

export const RecommendedTour = ({ story }: any) => {
  const { content, full_slug } = story;

  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      <Link href={`/${full_slug}`}>
        <img
          className="aspect-video object-cover w-full"
          src={`${content.main_image?.filename}/m/736x414/filters:quality(70)`}
          alt={content.main_image?.alt || content.title}
        />
      </Link>

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-blue-700">
          <Link href={`/${full_slug}`}>{content.name}</Link>
        </h2>

        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full">
          📍 {content.location}
        </span>

        <p className="text-sm text-gray-800 font-medium">💲 {content.price}</p>

        <p className="text-sm text-gray-600">
          {content.introduction?.substring(0, 120)}...
        </p>

        <Link
          href={`/${full_slug}`}
          className="text-blue-600 hover:underline text-sm font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

