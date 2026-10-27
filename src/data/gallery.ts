import type { ImageMetadata } from "astro";
import img1 from "../assets/IMAGE-1.webp";
import img2 from "../assets/IMAGE-2.webp";
import img3 from "../assets/IMAGE-3.webp";
import img4 from "../assets/IMAGE-4.webp";
import img5 from "../assets/IMAGE-5.webp";
import img6 from "../assets/IMAGE-6.webp";
import img7 from "../assets/IMAGE-7.webp";
import img8 from "../assets/IMAGE-8.webp";
import img9 from "../assets/IMAGE-9.webp";
import img10 from "../assets/IMAGE-10.webp";
import img11 from "../assets/IMAGE-11.webp";
import img12 from "../assets/IMAGE-12.webp";
import img13 from "../assets/IMAGE-13.webp";

export interface GalleryPhoto {
  /** Imported asset metadata, required by Astro's optimized <Image /> component. */
  readonly source: ImageMetadata;
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

/**
 * Gallery source of truth: every image shipped in `src/assets`.
 * The order alternates portrait and landscape crops so the masonry
 * grid stays visually balanced across columns.
 */
const orderedImages: readonly ImageMetadata[] = [img3, img1, img8, img2, img6, img4, img9, img5, img7, img10, img11, img13, img12];

export function getGalleryPhotos(): GalleryPhoto[] {
  return orderedImages.map((image, index) => ({
    source: image,
    src: image.src,
    width: image.width,
    height: image.height,
    alt: `School life photograph ${index + 1} from the IDDI NEWS English Department gallery`,
  }));
}
