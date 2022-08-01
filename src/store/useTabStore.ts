import create from "zustand";
import { combine } from "zustand/middleware";
import { constants } from "../../constants";

const useTabStore = create(
  combine(
    {
      // selected restuarant
      selectedTabId: constants.bottom_tabs[0].id,
    },
    (set) => ({
      setSelectedTabId: (tabId: number) =>
        set(() => ({ selectedTabId: tabId })),
    })
  )
);

export default useTabStore;
