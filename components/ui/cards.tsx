import { section } from "motion/react-client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


interface PhotographerCardProps {
  type: string;
  image: string;
}

export function PhotographerCard({
  type,
  image,

  
}: PhotographerCardProps) {
  return (
    

    <article className="
      group overflow-hidden rounded-xl border border-white 
      bg-neutral-900 transition-all duration-300 
      hover:scale-[1.02] 
      hover:border-neutral-400 
      hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]
      cursor-pointer
    ">
      
     
      <div className="relative h-42 w-full overflow-hidden">
        <Image
          src={image}
          alt={type}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
      </div>

      {/* Conteúdo */}
      <div className="px-4 pt-4 pb-5">
        <Link href="#">
          <h3 className="mt-1 text-lg font-medium text-center text-neutral-200 transition-colors group-hover:text-white">
            {type}
          </h3>
        </Link>
      </div>
    </article>
  );
}
