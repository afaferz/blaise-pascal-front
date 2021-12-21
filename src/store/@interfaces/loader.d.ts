import { ActionContext } from "vuex";
import { IRootState } from "./root";
import { LoaderMutations as LoaderMTypes } from "@/store/modules/loader/mutation-types";
import { LoaderActions as LoaderATypes } from "@/store/modules/loader/action-types";

export interface ILoaderStates {
    loading?: boolean;
    rootDispatch?: boolean;
}

export interface ILoaderGetters {
    getLoading(state: ILoaderStates): boolean;
}

export type LoaderMutationsTypes<State = ILoaderStates> = {
    [LoaderMTypes.SET_LOADING](state: State, payload: boolean): void;
};

export type AugmentedActionContext = {
    commit<K extends keyof LoaderMutationsTypes>(
        key: K,
        payload: Parameters<LoaderMutationsTypes[K]>[1]
    ): ReturnType<LoaderMutationsTypes[K]>;
} & Omit<ActionContext<ILoaderStates, IRootState>, "commit">;

export interface LoaderActionTypes {
    [LoaderATypes.GET_LOADING](
        { commit }: AugmentedActionContext,
        payload: boolean
    ): void;
}