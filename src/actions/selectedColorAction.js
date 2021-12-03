import { createAction } from "./actionCreator";
import { SELECTED_COLOR_TYPES } from "./types";

export const setSelectedColor = createAction(
  SELECTED_COLOR_TYPES.SET_SELECTED_COLOR
);
