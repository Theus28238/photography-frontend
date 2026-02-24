import Image from "next/image";
import Link from "next/link";

interface PhotographerProfileCardProps {
  name: string;
  specialty: string;
  description: string;
  coverImage: string;
  profileImage: string;
}

export function PhotographerProfileCard({
  name,
  specialty,
  description,
  coverImage,
  profileImage,
  
}: PhotographerProfileCardProps) {
  return (
    <article className="
      group relative overflow-hidden rounded-xl 
      bg-neutral-900 border border-neutral-800
      transition-all duration-300
      hover:scale-[1.02]
      hover:border-neutral-500
      hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]
      cursor-pointer
    ">
      
      {/* Imagem principal */}
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Conteúdo */}
      <div className="relative px-4 pb-5 pt-12 text-center">
        
        {/* Foto de perfil */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="w-16 h-16 rounded-full border-2 border-neutral-900 overflow-hidden shadow-md">
            <Image
              src={profileImage}
              alt={`Foto de ${name}`}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>

        <Link href="#">
          <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
            {name}
          </h3>
        </Link>

        <p className="text-xs text-neutral-400 mt-1">
          {specialty}
        </p>

        <p className="text-xs text-neutral-500 mt-3 line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}