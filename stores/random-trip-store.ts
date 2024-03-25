import { create } from 'zustand';

type State = {
  startingPoint: string;
  howManyDays: number;
  travelGroup: string;
  travelPeriod: string;
  preferences: string;
  budget: number;
  continents: string[];
  styles: string[];
}

type Actions = {
  setStartingPoint: (startingPoint: string) => void;
  setHowManyDays: (howManyDays: number) => void;
  setTravelGroup: (travelGroup: string) => void;
  setTravelPeriod: (travelPeriod: string) => void;
  setPreferences: (preferences: string) => void;
  setBudget: (budget: number) => void;
  setContinents: (continents: string[]) => void;
  setStyles: (styles: string[]) => void;
  resetStore: () => void;
}

// Define the initial state
const initialState: State = {
  startingPoint: '',
  howManyDays: 0,
  travelGroup: '',
  travelPeriod: '',
  preferences: '',
  budget: 0,
  continents: [],
  styles: [],
}

export const useRandomTripStore = create<State & Actions>((set) => ({
  ...initialState,
  setStartingPoint: (startingPoint) => set({ startingPoint }),
  setHowManyDays: (howManyDays) => set({ howManyDays }),
  setTravelGroup: (travelGroup) => set({ travelGroup }),
  setTravelPeriod: (travelPeriod) => set({ travelPeriod }),
  setPreferences: (preferences) => set({ preferences }),
  setBudget: (budget) => set({ budget }),
  setContinents: (continents) => set({ continents }),
  setStyles: (styles) => set({ styles }),
  resetStore: () => {
    set(initialState);
  },
}));
