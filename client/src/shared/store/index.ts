import { create } from "zustand";

import { authSlice } from "./slices";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Store } from "@/shared/lib/types";

export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      immer((...a) => ({
        ...authSlice(...a),
      }))
    )
  )
);
