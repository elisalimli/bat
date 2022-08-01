import create from "zustand";
import { combine } from "zustand/middleware";
import { constants } from "../../constants";
import { DRAWER_SCREENS } from "../../constants/constants";
const useDrawerStore = create(
  combine(
    {
      // selected restuarant
      selectedTab: DRAWER_SCREENS.HOME,
    },
    (set) => ({
      setSelectedTab: (tab: DRAWER_SCREENS) =>
        set(() => ({ selectedTab: tab })),
    })
  )
);

export default useDrawerStore;
