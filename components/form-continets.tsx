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

const formSchema = z.object({
  startingPoint: z.string().min(2).max(50),
  howManyDays: z.coerce.number().int().min(1).max(50),
  travelGroup: z.string().min(2).max(50),
  travelPeriod: z.string().min(2).max(50),
  budget: z.coerce.number().int().min(1).max(100000),
  preferences: z.string(),
});

const FormContinents = () => {
  const randomTripStore = useRandomTripStore();
  const generalStore = useGeneralStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startingPoint: '',
      howManyDays: 1,
      travelGroup: '',
      travelPeriod: '',
      budget: 1,
      preferences: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    randomTripStore.setStartingPoint(values.startingPoint);
    randomTripStore.setHowManyDays(values.howManyDays);
    randomTripStore.setTravelGroup(values.travelGroup);
    randomTripStore.setTravelPeriod(values.travelPeriod);
    randomTripStore.setPreferences(values.preferences);
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
                <Input placeholder="shadcn" {...field} />
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
          name="travelGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Travel group</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
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
                <Input placeholder="shadcn" {...field} />
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
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget</FormLabel>
              <FormControl>
                <Input type="number" placeholder="shadcn" {...field} />
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
                <Textarea placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Do you have any preferences? If not leave it empty.
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

export default FormContinents;
