import { createAction } from "./actionCreator";
import { TASK_TYPES } from "./types";

export const addTask = createAction(TASK_TYPES.ADD_TASK);
