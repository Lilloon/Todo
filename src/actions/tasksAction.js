import { createAction } from "./actionCreator";
import { TASK_TYPES } from "./types";

export const addTask = createAction(TASK_TYPES.ADD_TASK);
export const removeTask = createAction(TASK_TYPES.REMOVE_TASK)
export const setDoneTask = createAction(TASK_TYPES.SET_DONE_TASK)

