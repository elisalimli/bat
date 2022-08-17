import create from "zustand";
import { combine } from "zustand/middleware";

const useAuthStore = create(
  combine(
    {
      // selected restuarant
      auth: true,
    },
    (set) => ({
      setAuth: (auth: boolean) => set(() => ({ auth })),
    })
  )
);

export default useAuthStore;
