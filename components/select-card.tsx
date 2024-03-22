import { ImageData, SelectCardProps } from '@/types/types';
import Image from 'next/image';
import { Badge } from './ui/badge';

const SelectCard = ({ title, text, imageData }: SelectCardProps) => {
  return (
    <div className="card relative max-w-[250px] w-full bg-cover bg-center overflow-hidden min-h-[300px] bg-gradient-to-t from-black via-black to-black/20 shadow-boxShadow shadow-lg rounded-2xl">
      <Image
        src={imageData.src}
        alt={imageData.alt}
        fill
        className='object-cover w-full h-full'
      />
      <Badge variant="card" className="absolute top-4 left-4">{title}</Badge>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h2 className="text-4xl font-bold text-textColor-card leading-normal">
          {title}
        </h2>
        <p className="text-sm text-textColor-card leading-tight">{text}</p>
      </div>
    </div>
  );
};

export default SelectCard;
