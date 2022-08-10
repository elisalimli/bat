import icons from "./icons";

const screens = {
  main_layout: "MainLayout",
  home: "Home",
  search: "Search",
  cart: "Cart",
  favourite: "Favourite",
  notification: "Notion",
  my_wallet: "My Wallet",
};

// @todo find a better way
export enum DRAWER_SCREENS {
  HOME = "Home",
  SEARCH = "Search",
  MY_WALLET = "My Wallet",
  NOTIFICATION = "Notification",
  FAVOURITE = "Favourite",
  TRACK_YOUR_ORDER = "Track Your Order",
  COUPONS = "Coupons",
  SETTINGS = "Settings",
  INVITE_FRIEND = "Invite a friend",
  HELP_CENTER = "Help Center",
}

export interface IOnBoardingScreen {
  id: number;
  backgroundImage: any;
  bannerImage: any;
  title: string;
  description: string;
}

///----
const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/favourite_food.png"),
    title: "Choose a Favourite Food",
    description:
      "When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards",
  },
  {
    id: 2,
    backgroundImage: require("../assets/images/background_02.png"),
    bannerImage: require("../assets/images/hot_delivery.png"),
    title: "Hot Delivery to Home",
    description:
      "We make food ordering fasr, simple and free-no matter if you order online or cash",
  },
  {
    id: 3,
    backgroundImage: require("../assets/images/background_01.png"),
    bannerImage: require("../assets/images/great_food.png"),
    title: "Receive the Great Food",
    description:
      "You’ll receive the great food within a hour. And get free delivery credits for every order.",
  },
];

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
    icon: icons.home,
  },
  {
    id: 1,
    label: screens.search,
    icon: icons.search,
  },
  {
    id: 2,
    label: screens.cart,
    icon: icons.coupon,
  },
  {
    id: 3,
    label: screens.favourite,
    icon: icons.favourite,
  },
  {
    id: 4,
    label: screens.notification,
    icon: icons.notification,
  },
];

const delivery_time = [
  {
    id: 1,
    label: "10 Mins",
  },
  {
    id: 2,
    label: "20 Mins",
  },
  {
    id: 3,
    label: "30 Mins",
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: "Burger",
  },
  {
    id: 2,
    label: "Fast Food",
  },
  {
    id: 3,
    label: "Pizza",
  },
  {
    id: 4,
    label: "Asian",
  },
  {
    id: 5,
    label: "Dessert",
  },
  {
    id: 6,
    label: "Breakfast",
  },
  {
    id: 7,
    label: "Vegetable",
  },
  {
    id: 8,
    label: "Taccos",
  },
];

export default {
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  onboarding_screens,

  tags,
};
