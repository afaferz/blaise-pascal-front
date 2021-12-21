import { Module, ModuleTree } from "vuex";
import { IRootState } from "@/store/@interfaces/root";
// import { getters } from "./getters";
// import { actions } from "./actions";
// import { mutations } from "./mutations";
// import { state } from "./state";
import LoaderModule from "../loader";

// Modules
const modules: ModuleTree<IRootState> = {
    LoaderModule,
};

const root: Module<IRootState, IRootState> = {
    // state,
    // getters,
    // mutations,
    // actions,
    modules
};

export default root;