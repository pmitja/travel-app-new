"use client";

import { cn } from '@/lib/utils';
import { useGeneralStore } from '@/stores/general-store';
import { CircleCheckBig } from 'lucide-react';

type StepIndicatorProps = {
  number: number;
  text: string;
};

const StepIndicator = ({ number, text }: StepIndicatorProps) => {
  const generalStore = useGeneralStore();

  return (
    <div
      className={cn(
        'px-3 py-2 rounded-lg flex gap-3 items-center bg-activeColor-background',
        number !== generalStore.randomTripStep && 'bg-inherit'
      )}>
      <span
        className={cn(
          'rounded-full border-2 text-md text-textColor font-semibold w-10 h-10 flex items-center justify-center border-activeColor-border',
          number !== generalStore.randomTripStep && 'text-textColor/20 border-textColor/20'
        )}>
        {number}
      </span>
      <h5
        className={cn(
          'text-md leading-normal font-semibold text-textColor',
          number !== generalStore.randomTripStep && 'text-textColor/20 border-textColor/20'
        )}>
        {text}
      </h5>
      { number !== generalStore.randomTripStep && generalStore.randomTripStep + 1 > number && <CircleCheckBig stroke="#EEF3ED" />}
    </div>
  );
};

export default StepIndicator;
