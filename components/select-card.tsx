import { ImageData, SelectCardProps } from '@/types/types';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const SelectCard = ({ title, text, imageData, classNames }: SelectCardProps) => {
  return (
    <div className={cn("card relative max-w-[150px] min-h-[150px] sm:max-w-[200px] sm:min-h-[200px] md:max-w-[250px] w-full bg-cover bg-center overflow-hidden md:min-h-[300px] bg-gradient-to-t from-black via-black to-black/20 shadow-boxShadow shadow-lg rounded-2xl", classNames)}>
      <Image
        src={imageData.src}
        alt={imageData.alt}
        fill
        className='object-cover w-full h-full'
      />
      <Badge variant="card" className="hidden sm:block sm:absolute sm:top-4 sm:left-4">{title}</Badge>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h2 className="text-2xl md:text-4xl font-bold text-textColor-card leading-normal">
          {title}
        </h2>
        <p className="text-sm text-textColor-card leading-tight hidden md:block">{text}</p>
      </div>
    </div>
  );
};

export default SelectCard;
