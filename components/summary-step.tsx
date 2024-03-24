'use client';

import { useRandomTripStore } from '@/stores/random-trip-store';
import { Button } from './ui/button';
import { useGeneralStore } from '@/stores/general-store';

const SummaryStep = () => {
  const randomTripStore = useRandomTripStore();
  const generalStore = useGeneralStore();

  return (
    <section className='flex flex-col gap-6'>
      <div className="flex flex-col gap-6 pb-6 border-b-2 border-textColor/10">
        <h4 className="text-lg text-textColor/50">
          Please carefully check your selection.
        </h4>
        <p className="text-md text-textColor/50">
          If you want to create changes click navigate back to desire step and
          change data there.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <span className='text-lg text-textColor/50 flex gap-3'>Starting point: <span className='font-semibold text-lg text-textColor'>{randomTripStore.startingPoint}</span></span>
        <span className='text-lg text-textColor/50 flex gap-3'>How many days: <span className='font-semibold text-lg text-textColor'>{randomTripStore.howManyDays}</span></span>
        <span className='text-lg text-textColor/50 flex gap-3'>Travel group: <span className='font-semibold text-lg text-textColor'>{randomTripStore.travelGroup}</span></span>
        <span className='text-lg text-textColor/50 flex gap-3'>Travel period: <span className='font-semibold text-lg text-textColor'>{randomTripStore.travelPeriod}</span></span>
        {randomTripStore.preferences && <span className='text-lg text-textColor/50 flex gap-3'>Preferences: <span className='font-semibold text-lg text-textColor'>{randomTripStore.preferences}</span></span>}
        <span className='text-lg text-textColor/50 flex gap-3'>Budget: <span className='font-semibold text-lg text-textColor'>${randomTripStore.budget.toLocaleString('en-US')}</span></span>
        <span className='text-lg text-textColor/50 flex gap-3'>Continents: <span className='font-semibold text-lg text-textColor'>{randomTripStore.continents.join(', ')}</span></span>
        <span className='text-lg text-textColor/50 flex gap-3'>Styles: <span className='font-semibold text-lg text-textColor'>{randomTripStore.styles.join(', ')}</span></span>
      </div>
      <div className="flex gap-5">
          <Button
            type="button"
            variant={'customGhost'}
            onClick={() =>
              generalStore.setRandomTripStep(generalStore.randomTripStep - 1)
            }>
            Back
          </Button>
          <Button type="submit" variant={'lightBlue'}>
            Generate
          </Button>
        </div>
    </section>
  );
};

export default SummaryStep;
