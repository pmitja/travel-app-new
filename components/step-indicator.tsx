import { cn } from '@/lib/utils';
import { CircleCheckBig } from 'lucide-react';

type StepIndicatorProps = {
  number: number;
  text: string;
  isPassed: boolean;
};

const StepIndicator = ({ number, text, isPassed }: StepIndicatorProps) => {
  return (
    <div
      className={cn(
        'px-3 py-2 rounded-lg flex gap-3 items-center bg-activeColor-background',
        isPassed && 'bg-inherit'
      )}>
      <span
        className={cn(
          'rounded-full border-2 border-textColor text-md text-textColor font-semibold w-10 h-10 flex items-center justify-center',
          isPassed && 'text-textColor/20 border-textColor/20'
        )}>
        {number}
      </span>
      <h5
        className={cn(
          'text-md leading-normal font-semibold text-textColor',
          isPassed && 'text-textColor/20 border-textColor/20'
        )}>
        {text}
      </h5>
      {isPassed && <CircleCheckBig stroke="#EEF3ED" />}
    </div>
  );
};

export default StepIndicator;
