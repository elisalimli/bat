import create from "zustand";
import { combine } from "zustand/middleware";
import { constants } from "../../constants";

const selectedTab = constants.DRAWER_SCREENS.HOME;
enum DRAWER_SCREENS {
  HOME = "Home",
  MY_WALLET = "My Wallet",
  NOTIFICATION = "Notification",
  FAVOURITE = "Favourite",
  TRACK_YOUR_ORDER = "Track Your Order",
  COUPONS = "Coupons",
  SETTINGS = "Settings",
  INVITE_FRIEND = "Invite a friend",
  HELP_CENTER = "Help Center",
}

const useDrawerStore = create(
  combine(
    {
      // selected restuarant
      selectedTab: constants.DRAWER_SCREENS.HOME,
    },
    (set) => ({
      setSelectedTab: (tab: DRAWER_SCREENS) =>
        set(() => ({ selectedTab: tab })),
    })
  )
);

export default useDrawerStore;
