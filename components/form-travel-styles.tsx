'use client';

import { useForm } from 'react-hook-form';
import { string, z } from 'zod';
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
import { Styles, StylesDetails } from '@/types/enums';
import { Label } from './ui/label';

const formSchema = z.object({
  styles: z.array(z.string()).nonempty({ message: 'Please select at least one style.'}),
});

const FormTravelStyles = () => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const randomTripStore = useRandomTripStore();
  const generalStore = useGeneralStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      styles: [],
    },
  });

  useEffect(() => {
    const container = document.getElementById('random-trip');
    requestAnimationFrame(() => container?.scrollIntoView({ behavior: 'smooth' }));
    const storedStyles = randomTripStore.styles;
    
    setSelectedStyles(storedStyles);

    form.setValue('styles', storedStyles as [string, ...string[]]);
  }, []);

  function handleCheckboxChange(style: string) {
    setSelectedStyles(prevSelectedStyles => {
      const updatedStyles = prevSelectedStyles.includes(style)
        ? prevSelectedStyles.filter(item => item !== style)
        : [...prevSelectedStyles, style];
      
      return updatedStyles;
    });
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    randomTripStore.setStyles(values.styles);
    generalStore.setRandomTripStep(4);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="styles"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Travel styles</FormLabel>
              <FormDescription>
                What do you want to do on your trip (select multiple)?
              </FormDescription>
              <FormMessage />
              <FormControl>
                <div className="flex gap-4 flex-wrap">
                  {Object.entries(Styles).map(([_, style]) => {
                    return (
                      <Label
                        key={style}
                        className="max-w-[150px] max-h-[150px] sm:max-w-[200px] sm:max-h-[200px] w-full md:min-h-[300px] md:max-w-[250px]"
                        htmlFor={style}>
                        <SelectCard
                          title={style}
                          imageData={{
                            src: StylesDetails[style].src,
                            alt: StylesDetails[style].alt,
                          }}
                          text={StylesDetails[style].description}
                          classNames={
                            selectedStyles.includes(style)
                              ? 'outline outline-4 outline-offset-2 outline-green-500'
                              : ''
                          }
                        />
                        <Checkbox
                          id={style}
                          name={style}
                          value={style}
                          onCheckedChange={(event) => {
                            handleCheckboxChange(style);
                            field.onChange(
                              event
                                ? selectedStyles.includes(style)
                                  ? selectedStyles
                                  : [...selectedStyles, style]
                                : selectedStyles.filter(
                                    (item) => item !== style
                                  )
                            );
                          }}
                          className="hidden"
                        />
                      </Label>
                    );
                  })}
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

export default FormTravelStyles;
