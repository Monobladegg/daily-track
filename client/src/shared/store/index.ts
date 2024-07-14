import { create } from "zustand";

import { createAuthSlice } from "./slices";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useStore = create()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createAuthSlice(...a),
        }))
      ),
      {
        name: "local-storage",
      }
    )
  )
);
