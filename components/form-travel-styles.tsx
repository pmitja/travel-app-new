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
import { useState } from 'react';
import { Styles, StylesDetails } from '@/types/enums';
import { Label } from './ui/label';

const formSchema = z.object({
  styles: z.array(z.string()).nonempty(),
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

  function handleCheckboxChange(style: string) {
    setSelectedStyles((prevSelectedStyles) => {
      if (prevSelectedStyles.includes(style)) {
        return prevSelectedStyles.filter((item) => item !== style);
      } else {
        return [...prevSelectedStyles, style];
      }
    });
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    randomTripStore.setContinents(values.styles);
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
              <FormLabel>Styles</FormLabel>
              <FormControl>
                <div className="flex gap-4 flex-wrap">
                  {Object.entries(Styles).map(
                    ([_, style]) => {
                      return (
                        <Label
                          key={style}
                          className="max-w-[200px] max-h-[200px] w-full md:min-h-[300px] md:max-w-[250px]"
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
                                  ? [...selectedStyles, style]
                                  : selectedStyles.filter(
                                      (item) => item !== style
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
              <FormDescription>
                How do you want to travel? Alone, with friends, family, etc.
              </FormDescription>
              <FormMessage />
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
