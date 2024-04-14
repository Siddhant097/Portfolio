import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { createClient, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { ContentIndexProps } from ".";
import ContentList from "./ContentList";

/**
 * Component for "ContentIndex" Slices.
 */
export const ContentIndex = async ({ slice, }: ContentIndexProps): Promise<JSX.Element> => {

  const client = createClient();
  const blogPosts = await client.getAllByType("big_post");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      <ContentList />
    </Bounded>
  );
};
