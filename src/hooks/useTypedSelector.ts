import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reduсers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
