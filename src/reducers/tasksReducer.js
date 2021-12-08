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
      case TASK_TYPES.REMOVE_TASK:
      return {
        ...state,
        taskList: [...state.taskList.filter((task) => task.id !== action?.$payload)],
      };
      case TASK_TYPES.SET_DONE_TASK:
      return {
        ...state,
        taskList: [...state.taskList.map((task) => {
          if (task.id === action?.$payload){
             return ({ Done:true,...task})
            }
          return (task)
        })],
      };
    default:
      return state;
  }
}
