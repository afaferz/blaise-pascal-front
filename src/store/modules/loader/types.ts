import {
    ILoaderStates,
    LoaderMutationsTypes,
    ILoaderGetters,
    LoaderActionTypes
} from "@/store/@interfaces/loader";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type LoaderStoreModuleTypes<S = ILoaderStates> = Omit<
    VuexStore<S>,
    "commit" | "getters" | "dispatch"
> & {
    commit<
        K extends keyof LoaderMutationsTypes,
        P extends Parameters<LoaderMutationsTypes[K]>[1]
    >(
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<LoaderMutationsTypes[K]>;
} & {
    getters: {
        [K in keyof ILoaderGetters]: ReturnType<ILoaderGetters[K]>;
    };
} & {
    dispatch<K extends keyof LoaderActionTypes>(
        key: K,
        payload?: Parameters<LoaderActionTypes[K]>[1],
        options?: DispatchOptions
    ): ReturnType<LoaderActionTypes[K]>;
};
