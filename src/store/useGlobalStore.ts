import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  resTitle: string;
  setResTitle: (deviceId: string) => void;

  resNumber: number;
  setResNumber: (resNumber: number) => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      resTitle: "",
      setResTitle: (resTitle) => set({ resTitle }),

      resNumber: 0,
      setResNumber: (resNumber) => set({ resNumber }),
    }),
    {
      name: "global-store",
    }
  )
);
