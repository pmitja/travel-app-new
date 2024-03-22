import { create } from 'zustand'

interface RandomTripState {
  startingPoint: string,
  howManyDays: number,
  travelGroup: string,
  travelPeriod: string,
  preferences: string,
  budget: number,
  setStartingPoint: (startingPoint: string) => void,
  setHowManyDays: (howManyDays: number) => void,
  setTravelGroup: (travelGroup: string) => void,
  setTravelPeriod: (travelPeriod: string) => void,
  setPreferences: (preferences: string) => void,
  setBudget: (budget: number) => void,
}

export const useRandomTripStore = create<RandomTripState>()((set) => ({
  startingPoint: "",
  howManyDays: 0,
  travelGroup: "",
  travelPeriod: "",
  preferences: "",
  budget: 0,
  setStartingPoint: (startingPoint) => set({ startingPoint }),
  setHowManyDays: (howManyDays) => set({ howManyDays }),
  setTravelGroup: (travelGroup) => set({ travelGroup }),
  setTravelPeriod: (travelPeriod) => set({ travelPeriod }),
  setPreferences: (preferences) => set({ preferences }),
  setBudget: (budget) => set({ budget }),
}))