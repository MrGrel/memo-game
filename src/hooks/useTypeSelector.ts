import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "../store";

export const useTypeSelector:TypedUseSelectorHook<TRootState> = useSelector