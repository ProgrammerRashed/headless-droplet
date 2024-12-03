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

function LeadershipCard({ people }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          data-aos="fade-up"
          className="flex flex-col overflow-hidden rounded-[8px] bg-surface"
        >
          <Image
            src={people.imageLink}
            width={410}
            height={340}
            alt={people.leaderName}
            className="aspect-square w-full object-cover md:aspect-[41/34]"
          />
          <div className="flex flex-col items-center justify-center px-2 py-5 text-center md:py-[30px]">
            <h4 className="mb-[10px] text-[22px] font-medium leading-[32px] text-gray-800">
              {people.leaderName}
            </h4>
            <p className="text-xs font-normal leading-[18px] text-gray-600">
              {people.role}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogOverlay className="bg-gray-800/80">
        <DialogContent
          data-lenis-prevent
          className="h-[90vh] min-w-[90vw] max-w-[90vw] rounded-[8px] p-[10px] pr-0 sm:min-w-[80vw] sm:max-w-[70vw] md:h-[80vh] xl:min-w-[90vw] xl:max-w-[90vw] xl:p-[30px] xl:pt-20 2xl:min-w-[70vw] 2xl:max-w-[70vw]"
        >
          <div className="flex h-full w-full flex-col gap-[30px] overflow-y-auto pr-[10px] md:flex-row md:overflow-hidden md:pr-0 xl:gap-[60px]">
            <div className="min-h-[360px] w-full overflow-hidden rounded-[4px] shadow-sm xl:min-w-[470px] xl:max-w-[470px]">
              <Image
                src={people.imageLink}
                alt={people.leaderName}
                width={400}
                height={440}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="scrollbar-thin flex w-full flex-col pb-5 md:overflow-y-auto md:pr-[15px]">
              <DialogHeader className="mb-10">
                <DialogTitle className="mb-[5px] text-start text-[28px] font-medium leading-[38px] text-gray-800">
                  {people.leaderName}
                </DialogTitle>
                <DialogDescription className="text-gray-400 text-start text-sm font-normal leading-[22px]">
                  {people.role}
                </DialogDescription>
              </DialogHeader>
              <p className="text-start text-base font-normal leading-[26px] text-gray-600">
                {people.details}
              </p>
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}

export default LeadershipCard;
