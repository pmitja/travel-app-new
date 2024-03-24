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
import { Input } from './ui/input';
import { Button } from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from './ui/textarea';
import { useRandomTripStore } from '@/stores/random-trip-store';
import { useGeneralStore } from '@/stores/general-store';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Slider } from './ui/slider';

const formSchema = z.object({
  startingPoint: z.string().min(2).max(50).refine(value => value !== '', {
    message: 'Please select a starting point',
  }),
  howManyDays: z.coerce.number().int().min(1).max(50).refine(value => value !== 0, {
    message: 'Please enter a valid number of days',
  }),
  travelPeriod: z.enum(['Winter', 'Summer', 'Autumn', 'Spring', '']).refine(value => value !== '', {
    message: 'Please select a travel period',
  }),
  travelGroup: z.enum(['Solo', 'Couple', 'Family', 'Business', '']).refine(value => value !== '', {
    message: 'Please select a travel period',
  }),
  budget: z.coerce.number().int().min(1).refine(value => value !== 0, {
    message: 'Please enter a valid budget',
  }),
  preferences: z.string(),
});

const FormRandomTrip = () => {
  const randomTripStore = useRandomTripStore();
  const generalStore = useGeneralStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startingPoint: '',
      howManyDays: 0,
      travelGroup: "",
      travelPeriod: '',
      budget: 0,
      preferences: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    randomTripStore.setStartingPoint(values.startingPoint);
    randomTripStore.setHowManyDays(values.howManyDays);
    randomTripStore.setTravelGroup(values.travelGroup);
    randomTripStore.setTravelPeriod(values.travelPeriod);
    randomTripStore.setPreferences(values.preferences);
    randomTripStore.setBudget(values.budget);
    generalStore.setRandomTripStep(2);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="startingPoint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Starting point</FormLabel>
              <FormControl>
                <Input placeholder="Ljubljana" {...field} />
              </FormControl>
              <FormDescription>
                This is your desired starting point.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="howManyDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How many days</FormLabel>
              <FormControl>
                <Input type="number" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                How many days do you want to travel?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="travelPeriod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Travel period</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Select travel period"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Winter">Winter</SelectItem>
                    <SelectItem value="Spring">Spring</SelectItem>
                    <SelectItem value="Summer">Summer</SelectItem>
                    <SelectItem value="Autumn">Autumn</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormDescription>
                In which period do you want to travel?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="travelGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Travel group</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select travel group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Solo">Solo</SelectItem>
                    <SelectItem value="Couple">Couple</SelectItem>
                    <SelectItem value="Family">Family</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                How do you want to travel? Alone, with friends, family, etc.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field: { value, onChange } }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel>Budget - $ {value.toLocaleString('en-US')}</FormLabel>
              <FormControl>
                <Slider
                  max={100000}
                  step={50}
                  defaultValue={[value]}
                  onValueChange={onChange}
                />
              </FormControl>
              <FormDescription>What is your budget?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferences</FormLabel>
              <FormControl>
                <Textarea placeholder="Sun, cold drinks, nightlife, safari, resorts,..." {...field} />
              </FormControl>
              <FormDescription>
                Do you have any preferences? If not leave it empty.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={'lightBlue'}>
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default FormRandomTrip;
