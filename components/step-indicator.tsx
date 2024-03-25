import { cn } from '@/lib/utils';

type StepIndicatorProps = {
  number: number;
  text: string;
  isActive?: boolean;
};

const StepIndicator = ({
  number,
  text,
  isActive = false,
}: StepIndicatorProps) => {
  return (
    <div
      className={cn(
        'px-3 py-2 rounded-lg flex gap-3 items-center bg-activeColor-background',
        !isActive && 'bg-inherit'
      )}>
      <span
        className={cn(
          'rounded-full border-2 text-md text-textColor font-semibold w-10 h-10 flex items-center justify-center border-activeColor-border',
          !isActive && 'text-textColor/20 border-textColor/20'
        )}>
        {number}
      </span>
      <h5
        className={cn(
          'text-md leading-normal font-semibold text-textColor',
          !isActive && 'text-textColor/20 border-textColor/20'
        )}>
        {text}
      </h5>
    </div>
  );
};

export default StepIndicator;
