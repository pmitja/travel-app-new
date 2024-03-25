'use client';

import { useRandomTripStore } from '@/stores/random-trip-store';
import { Button } from './ui/button';
import { useGeneralStore } from '@/stores/general-store';
import { useEffect } from 'react';

const SummaryStep = () => {
  const randomTripStore = useRandomTripStore();
  const generalStore = useGeneralStore();

  const handleSumbit = () => {
    console.log(randomTripStore);
    randomTripStore.resetStore();
  }

  useEffect(() => {
    const container = document.getElementById('random-trip');
    container?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 pb-6 border-b-2 border-textColor/10">
        <h4 className="text-lg text-textColor/50">
          Please carefully check your selection.
        </h4>
        <p className="text-md text-textColor/50">
          If you want to create changes click navigate back to desire step and
          change data there.
        </p>
      </div>
      <div className="flex flex-col gap-6 flex-wrap">
        <span className="text-lg text-textColor/50 flex gap-3 flex-wrap">
          Starting point:{' '}
          <span className="font-semibold text-lg text-textColor">
            {randomTripStore.startingPoint}
          </span>
        </span>
        <span className="text-lg text-textColor/50 flex gap-3 flex-wrap">
          How many days:{' '}
          <span className="font-semibold text-lg text-textColor">
            {randomTripStore.howManyDays}
          </span>
        </span>
        <span className="text-lg text-textColor/50 flex gap-3 flex-wrap">
          Travel group:{' '}
          <span className="font-semibold text-lg text-textColor">
            {randomTripStore.travelGroup}
          </span>
        </span>
        <span className="text-lg text-textColor/50 flex gap-3 flex-wrap">
          Travel period:{' '}
          <span className="font-semibold text-lg text-textColor">
            {randomTripStore.travelPeriod}
          </span>
        </span>
        {randomTripStore.preferences && (
          <span className="text-lg text-textColor/50 flex gap-3 flex-wrap">
            Preferences:{' '}
            <span className="font-semibold text-lg text-textColor">
              {randomTripStore.preferences}
            </span>
          </span>
        )}
        <span className="text-lg text-textColor/50 flex gap-3 flex-wrap">
          Budget:{' '}
          <span className="font-semibold text-lg text-textColor">
            ${randomTripStore.budget.toLocaleString('en-US')}
          </span>
        </span>
        <span className="text-lg text-textColor/50 flex gap-3 flex-wrap">
          Continents:{' '}
          <span className="font-semibold text-lg text-textColor">
            {randomTripStore.continents.join(', ')}
          </span>
        </span>
        <span className="text-lg text-textColor/50 flex gap-3 flex-wrap">
          Styles:{' '}
          <span className="font-semibold text-lg text-textColor">
            {randomTripStore.styles.join(', ')}
          </span>
        </span>
      </div>
      <div className="flex flex-col place-items-center sm:items-center  md:flex-row gap-5 mt-10 md:mt-20">
        <Button type="submit" variant={'lightBlue'} size={'2xl'} className='max-w-fit' onClick={handleSumbit}>
          Generate
        </Button>
        <Button
          type="button"
          variant={'customGhost'}
          className='max-w-fit'
          onClick={() =>
            generalStore.setRandomTripStep(generalStore.randomTripStep - 1)
          }>
          Back
        </Button>
      </div>
    </section>
  );
};

export default SummaryStep;
