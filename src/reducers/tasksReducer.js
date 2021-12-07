import { TASK_TYPES } from "../actions/types";

const defaultState = {
  taskList: [],
};

export default function ColorReducer(state = defaultState, action) {
  switch (action.type) {
    case TASK_TYPES.ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action?.$payload],
      };
    default:
      return state;
  }
}
