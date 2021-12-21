
import { GetterTree } from "vuex";
import { IRootState } from "@/store/@interfaces/root";
import {
    ILoaderGetters,
    ILoaderStates,
} from "@/store/@interfaces/loader.d";

export const getters: GetterTree<ILoaderStates, IRootState> &
    ILoaderGetters = {
    getLoading: (state: ILoaderStates) => {
        return state.loading || false;
    },
};