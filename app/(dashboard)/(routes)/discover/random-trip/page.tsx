import StepIndicator from "@/components/step-indicator";

const RandomTrip = () => {
  return ( 
    <main>
      <StepIndicator number={1} text="Step 1" isPassed={true} />
      <StepIndicator number={2} text="Step 2" isPassed={false} />
      This is random trip page
    </main>
   );
}
 
export default RandomTrip;