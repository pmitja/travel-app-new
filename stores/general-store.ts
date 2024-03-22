import { create } from 'zustand'

interface GeneralStoreState {
  randomTripStep: number,
  setRandomTripStep: (randomTripStep: number) => void,
}

export const useGeneralStore = create<GeneralStoreState>()((set) => ({
  randomTripStep: 1,
  setRandomTripStep: (randomTripStep) => set({ randomTripStep }),
}))