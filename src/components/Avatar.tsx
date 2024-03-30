import Image from "next/image";

export default function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-12 w-12 relative">
      {/* Next.js Image component inside a container where you can apply Tailwind CSS classes for responsive design */}
      <Image
        src={src}
        alt={alt}
        layout="fill" // Use 'fill' to ensure the image stretches to the container size
        objectFit="cover" // Equivalent to 'background-size: cover' in CSS
        className="rounded-full" // Tailwind CSS class for rounded images
      />
    </div>
  );
}
