import create from "zustand";
import { combine } from "zustand/middleware";
import { constants } from "../../constants";

const useOnBoardingStore = create(
  combine(
    {
      // selected restuarant
      currentIndex: 0,
    },
    (set) => ({
      setCurrentIndex: (index: number) => set(() => ({ currentIndex: index })),
    })
  )
);

export default useOnBoardingStore;
