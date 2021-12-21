import { MutationTree } from "vuex";
import { LoaderMutations } from "./mutation-types";
import { LoaderMutationsTypes, ILoaderStates } from "@/store/@interfaces/loader.d";

export const mutations: MutationTree<ILoaderStates> &
    LoaderMutationsTypes = {
    [LoaderMutations.SET_LOADING](state: ILoaderStates, payload: boolean) {
        state.loading = payload;
    },
};