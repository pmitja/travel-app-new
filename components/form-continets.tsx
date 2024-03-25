'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Button } from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRandomTripStore } from '@/stores/random-trip-store';
import { useGeneralStore } from '@/stores/general-store';
import SelectCard from './select-card';
import { Checkbox } from './ui/checkbox';
import { useEffect, useState } from 'react';
import { Continent, ContinentDetails } from '@/types/enums';
import { Label } from './ui/label';

const formSchema = z.object({
  continents: z.array(z.string()).nonempty({ message: 'Please select at least one continent.' }),
});

const FormContinents = () => {
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const randomTripStore = useRandomTripStore();
  const generalStore = useGeneralStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      continents: [],
    },
  });

  useEffect(() => {
    const container = document.getElementById('random-trip');
    container?.scrollIntoView({ behavior: 'smooth' });
    const storedContinents = randomTripStore.continents;
    
    setSelectedContinents(storedContinents);

    form.setValue('continents', storedContinents as [string, ...string[]]);
  }, []);

  function handleCheckboxChange(continent: string) {
    setSelectedContinents(prevSelectedContinents => {
      const updatedContients = prevSelectedContinents.includes(continent)
        ? prevSelectedContinents.filter(item => item !== continent)
        : [...prevSelectedContinents, continent];
      
      return updatedContients;
    });
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    randomTripStore.setContinents(values.continents);
    generalStore.setRandomTripStep(3);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="continents"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Continents</FormLabel>
              <FormDescription>
                Which continents would you like to visit (select multiple)?
              </FormDescription>
              <FormMessage />
              <FormControl>
                <div className="flex gap-4 flex-wrap">
                  {Object.entries(Continent).map(
                    ([_, continent]) => {
                      return (
                        <Label
                          key={continent}
                          className="max-w-[150px] max-h-[150px] sm:max-w-[200px] sm:max-h-[200px] w-full md:min-h-[300px] md:max-w-[250px]"
                          htmlFor={continent}>
                          <SelectCard
                            title={continent}
                            imageData={{
                              src: ContinentDetails[continent].src,
                              alt: ContinentDetails[continent].alt,
                            }}
                            text={ContinentDetails[continent].description}
                            classNames={
                              selectedContinents.includes(continent)
                                ? 'outline outline-4 outline-offset-2 outline-green-500'
                                : ''
                            }
                          />
                          <Checkbox
                            id={continent}
                            name={continent}
                            value={continent}
                            onCheckedChange={(event) => {
                              handleCheckboxChange(continent);
                              field.onChange(
                                event
                                  ? [...selectedContinents, continent]
                                  : selectedContinents.filter(
                                      (item) => item !== continent
                                    )
                              );
                            }}
                            className="hidden"
                          />
                        </Label>
                      );
                    }
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
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
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormContinents;
