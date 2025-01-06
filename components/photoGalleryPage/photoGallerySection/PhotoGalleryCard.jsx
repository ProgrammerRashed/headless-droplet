import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";

import PhotoGalleryTrigger from "./PhotoGalleryTrigger";
import PhotoGalleryContent from "./PhotoGalleryContent";

function PhotoGalleryCard({ gallery }) {
  return (
    <Dialog>
      <DialogTrigger>
        <PhotoGalleryTrigger gallery={gallery} />
      </DialogTrigger>
      <DialogOverlay className="bg-gray-800">
        <PhotoGalleryContent gallery={gallery} />
      </DialogOverlay>
    </Dialog>
  );
}

export default PhotoGalleryCard;
