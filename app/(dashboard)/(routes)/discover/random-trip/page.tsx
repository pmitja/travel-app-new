"use client";

import FormContinents from '@/components/form-continets';
import FormRandomTrip from '@/components/form-random-trip';
import SectionContent from '@/components/section-content';
import SectionSidebar from '@/components/section-sidebar';
import StepIndicator from '@/components/step-indicator';
import { useGeneralStore } from '@/stores/general-store';

const STEP_TITLES = [
  'General informations',
  'Continents',
  'Travel style',
  'Summary'
]

const RandomTrip = () => {
  const generalStore = useGeneralStore();
  return (
    <main className="pt-20">
      <SectionSidebar>
        <StepIndicator number={1} text="Step 1" />
        <StepIndicator number={2} text="Step 2" />
      </SectionSidebar>
      <SectionContent>
        <h1 className="text-3xl text-textColor">Step {generalStore.randomTripStep}: <span className='font-semibold'>{STEP_TITLES[generalStore.randomTripStep - 1]}</span></h1>
        {generalStore.randomTripStep === 1 && <FormRandomTrip />}
        {generalStore.randomTripStep === 2 && <FormContinents />}
      </SectionContent>
    </main>
  );
};

export default RandomTrip;
