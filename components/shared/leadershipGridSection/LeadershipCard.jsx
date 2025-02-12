import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function LeadershipCard({
  cardBackgroundSection,
  cardImageSize,
  cardDetailsClass,
  people,
}) {
const image = people?.node?.featuredImage?.node?.mediaItemUrl
const title = people?.node?.title
  return (
    <Dialog>
      <DialogTrigger>
        <div
          data-aos="fade-up"
          className={cn(
            "flex flex-col overflow-hidden rounded-[4px] bg-surface",
            cardBackgroundSection,
          )}
        >
          <Image
            src={image || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"}
            width={410}
            height={340}
            alt={title}
            className={cn(
              "aspect-square w-full object-cover md:aspect-[41/34]",
              cardImageSize,
            )}
          />
          <div
            className={cn(
              "flex flex-col items-center justify-center px-2 py-5 text-center md:py-[30px]",
              cardDetailsClass,
            )}
          >
            <h4 className="mb-[10px] text-[22px] font-medium leading-[32px] text-gray-800">
              {title}
            </h4>
            <p className="max-w-[220px] text-xs font-normal leading-[18px] text-gray-600">
              {people.node?.position}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogOverlay className="bg-gray-800/80">
        <DialogContent
          data-lenis-prevent
          className="h-[90vh] w-[90vw] overflow-hidden rounded-[8px] border-none bg-surface p-0 sm:w-[60vw] sm:min-w-[60vw] sm:max-w-[60vw] md:h-[60vh] md:w-[90vw] md:min-w-[90vw] md:max-w-[90vw] lg:h-[75vh] lg:w-[85vw] lg:min-w-[82vw] lg:max-w-[85vw]"
        >
          <div className="flex h-full w-full flex-col overflow-hidden md:flex-row md:gap-10 md:p-[30px] md:pt-20 lg:gap-[60px]">
            <div className="mb-5 h-[330px] w-full sm:h-[500px] md:mb-0 md:h-auto md:max-w-[470px]">
              <Image
                src={image || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"}
                alt={title}
                width={400}
                height={440}
                className="h-full w-full rounded-t-[8px] object-cover md:rounded-[8px]"
              />
            </div>
            <div className="scrollbar-thin flex w-full flex-col overflow-y-scroll px-[15px] pb-[30px] pt-0 text-left md:flex-grow md:px-0 md:pb-0 md:pr-4">
              <DialogHeader className="mb-[10px] text-left lg:mb-5 lg:border-b lg:border-b-gray-50 lg:pb-5">
                <DialogTitle className="gray-800 mb-0.5 text-xl font-semibold leading-[32px] lg:mb-1 lg:text-[28px] lg:leading-[38px]">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-left text-sm font-normal leading-[22px] text-gray-400">
                  {people.node?.position}
                </DialogDescription>
              </DialogHeader>
              <p className="text-base font-normal leading-[26px] text-gray-600">
                {people.node?.content?.replace(/<\/?[^>]+(>|$)/g, '')}
              </p>
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}

export default LeadershipCard;
