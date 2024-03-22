import FormRandomTrip from '@/components/form-random-trip';
import SectionContent from '@/components/section-content';
import SectionSidebar from '@/components/section-sidebar';
import StepIndicator from '@/components/step-indicator';

const RandomTrip = () => {
  return (
    <main className="pt-20">
      <SectionSidebar>
        <StepIndicator number={1} text="Step 1" />
        <StepIndicator number={2} text="Step 2" />
      </SectionSidebar>
      <SectionContent>
        <FormRandomTrip />
      </SectionContent>
    </main>
  );
};

export default RandomTrip;
