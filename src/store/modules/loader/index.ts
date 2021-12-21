import { Module } from "vuex";
import { IRootState } from "@/store/@interfaces/root";
import { ILoaderStates } from "@/store/@interfaces/loader.d";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

// Module
const loader: Module<ILoaderStates, IRootState> = {
    state,
    getters,
    mutations,
    actions
};

export default loader;