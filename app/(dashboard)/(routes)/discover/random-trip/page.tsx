"use client";

import FormContinents from '@/components/form-continets';
import FormRandomTrip from '@/components/form-random-trip';
import FormTravelStyles from '@/components/form-travel-styles';
import SectionContent from '@/components/section-content';
import SectionSidebar from '@/components/section-sidebar';
import StepIndicator from '@/components/step-indicator';
import SummaryStep from '@/components/summary-step';
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
    <main className="md:pt-20">
      <SectionSidebar>
        <StepIndicator number={1} text="Step 1" isActive={generalStore.randomTripStep === 1}/>
        <StepIndicator number={2} text="Step 2" isActive={generalStore.randomTripStep === 2}/>
        <StepIndicator number={3} text="Step 3" isActive={generalStore.randomTripStep === 3}/>
        <StepIndicator number={4} text="Step 4" isActive={generalStore.randomTripStep === 4}/>
      </SectionSidebar>
      <SectionContent id={'random-trip'}>
        <h3 className="text-3xl text-textColor">Step {generalStore.randomTripStep}: <span className='font-semibold'>{STEP_TITLES[generalStore.randomTripStep - 1]}</span></h3>
        {generalStore.randomTripStep === 1 && <FormRandomTrip />}
        {generalStore.randomTripStep === 2 && <FormContinents />}
        {generalStore.randomTripStep === 3 && <FormTravelStyles />}
        {generalStore.randomTripStep === 4 && <SummaryStep />}
      </SectionContent>
    </main>
  );
};

export default RandomTrip;
