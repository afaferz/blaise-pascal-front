import { createStore } from "vuex";
import { IRootState } from "@/store/@interfaces/root";
import { LoaderStoreModuleTypes } from "./modules/loader/types";
// import { RootStoreModuleTypes } from "./modules/root/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
    loader: LoaderStoreModuleTypes;
    // root: RootStoreModuleTypes;
};

export type Store = LoaderStoreModuleTypes<Pick<StoreModules, "loader">> &
    LoaderStoreModuleTypes<Pick<StoreModules, "loader">>
    // RootStoreModuleTypes<Pick<StoreModules, "root">>;