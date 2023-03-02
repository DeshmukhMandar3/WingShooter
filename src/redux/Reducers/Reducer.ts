import {
  ADD_USER_ONE,
  ADD_USER_ONE_AVATAR,
  ADD_USER_ONE_POINTS,
  ADD_USER_TWO,
  ADD_USER_TWO_AVATAR,
  ADD_USER_TWO_POINTS,
} from "../ActionTypes/ActionTypes";

type actionType =
  | { type: "add/user/one"; payload: string }
  | { type: "add/user/two"; payload: string }
  | { type: "add/user/one/avatar"; payload: string }
  | { type: "add/user/two/avatar"; payload: string }
  | { type: "add/user/one/points"; payload: undefined }
  | { type: "add/user/two/points"; payload: undefined };

export interface StateType {
  user_one_name: string;
  user_two_name: string;
  user_one_avatar: string;
  user_two_avatar: string;
  user_one_points: number;
  user_two_points: number;
}

const initialState: StateType = {
  user_one_name: "",
  user_two_name: "",
  user_one_avatar: "",
  user_two_avatar: "",
  user_one_points: 0,
  user_two_points: 0,
};

export const Reducer = (
  state: StateType = initialState,
  action: actionType
): StateType => {
  switch (action.type) {
    case ADD_USER_ONE:
      return { ...state, user_one_name: action.payload };
    case ADD_USER_TWO:
      return { ...state, user_two_name: action.payload };
    case ADD_USER_ONE_AVATAR:
      return { ...state, user_one_avatar: action.payload };
    case ADD_USER_TWO_AVATAR:
      return { ...state, user_two_avatar: action.payload };
    case ADD_USER_ONE_POINTS:
      return { ...state, user_one_points: state.user_one_points + 1 };
    case ADD_USER_TWO_POINTS:
      return { ...state, user_two_points: state.user_two_points + 1 };
    default:
      return state;
  }
};
