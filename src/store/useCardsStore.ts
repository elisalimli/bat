import create from "zustand";
import { combine } from "zustand/middleware";
import { constants } from "../../constants";

const useCardsStore = create(
  combine(
    {
      // selected restuarant
      selectedCardId: 0,
    },
    (set) => ({
      setselectedCardId: (cardId: number) =>
        set(() => ({ selectedCardId: cardId })),
    })
  )
);

export default useCardsStore;
