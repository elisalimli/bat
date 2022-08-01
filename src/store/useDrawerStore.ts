import create from "zustand";
import { combine } from "zustand/middleware";

const useDrawerStore = create(
  combine(
    {
      // selected restuarant
      selectedTab: "",
    },
    (set) => ({
      setSelectedTab: (tab: string) => set(() => ({ selectedTab: tab })),
    })
  )
);

export default useDrawerStore;
