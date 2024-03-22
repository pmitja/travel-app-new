import SectionContent from '@/components/section-content';
import SectionSidebar from '@/components/section-sidebar';
import StepIndicator from '@/components/step-indicator';

const RandomTrip = () => {
  return (
    <main className="pt-20">
      <SectionSidebar>
        <StepIndicator number={1} text="Step 1" isPassed={true} />
        <StepIndicator number={2} text="Step 2" isPassed={false} />
      </SectionSidebar>
      <SectionContent>This is random trip page</SectionContent>
    </main>
  );
};

export default RandomTrip;
