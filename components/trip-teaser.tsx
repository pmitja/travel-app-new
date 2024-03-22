import { SelectCardProps } from '@/types/types';
import Link from 'next/link';
import SelectCard from './select-card';
import { MoveRight } from 'lucide-react';

type TripTeaserProps = {
  title: string;
  button: TripTeaserButtonProps;
  cards?: SelectCardProps[];
};

type TripTeaserButtonProps = {
  text: string;
  link: string;
};

const TripTeaser = ({ title, button, cards }: TripTeaserProps) => {
  return (
    <section className="flex flex-col gap-6 max-w-[525px] w-full">
      <div className="flex justify-between place-items-center flex-wrap">
        <h3 className="text-3xl font-bold leading-loose">{title}</h3>
        <Link  href={button.link}  className='flex gap-3 py-2 px-3 bg-pillColor rounded-2xl shadow-sm max-w-fit hover:bg-pillColor/70 transition-colors text-base leading-normal'>
          <span>
            {button.text}
          </span>
          <MoveRight />
        </Link>
      </div>
      {cards && (
        <div className="flex gap-6 flex-wrap">
          {cards.map((card, index) => (
            <SelectCard
              key={index}
              title={card.title}
              text={card.text}
              imageData={card.imageData}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TripTeaser;
