import { ActionTree } from "vuex";
import { IRootState } from "@/store/@interfaces/root";
import { LoaderActions } from "./action-types";
import { LoaderMutations } from "./mutation-types";
import {
    LoaderActionTypes,
    ILoaderStates,
} from "@/store/@interfaces/loader.d";

export const actions: ActionTree<ILoaderStates, IRootState> &
    LoaderActionTypes = {
    [LoaderActions.SET_LOADING]({ commit }, payload: boolean) {
        commit(LoaderMutations.SET_LOADING, payload);
    }
};