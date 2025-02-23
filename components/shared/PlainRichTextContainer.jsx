import { cn } from "@/lib/utils";

function PlainRichTextContainer({ data }) {
  const content = data?.data?.content;
  return (
    <section data-aos="fade-up" className="my-10 md:my-16 0.5xl:my-20">
      <div className={cn("container !max-w-[1000px]")}>
        <div
          className="rich-content-container"
          dangerouslySetInnerHTML={{
            __html: typeof content === "string" ? content : "",
          }}
        />
      </div>
    </section>
  );
}

export default PlainRichTextContainer;
