import {
  ADD_BACKGROUND,
  ADD_USER_ONE,
  ADD_USER_ONE_AVATAR,
  ADD_USER_ONE_POINTS,
  ADD_USER_TWO,
  ADD_USER_TWO_AVATAR,
  ADD_USER_TWO_POINTS,
  CURRENT_USER,
  GAME_OVER,
  GET_FROM_DATABASE,
  RESET_USER_SCORE,
} from "../ActionTypes/ActionTypes";

export interface leaderboardType {
  name: string;
  points: number;
}

type actionType =
  | { type: "add/user/one"; payload: string }
  | { type: "add/user/two"; payload: string }
  | { type: "add/user/one/avatar"; payload: string }
  | { type: "add/user/two/avatar"; payload: string }
  | { type: "add/user/one/points"; payload: undefined }
  | { type: "add/user/two/points"; payload: undefined }
  | { type: "add/background"; payload: string }
  | { type: "current/user"; payload: undefined }
  | { type: "score/reset"; payload: undefined }
  | { type: "get/points/database"; payload: leaderboardType[] }
  | { type: "game/over"; payload: undefined };

export interface StateType {
  user_one_name: string;
  user_two_name: string;
  background_image: string;
  user_one_avatar: string;
  user_two_avatar: string;
  user_one_points: number;
  user_two_points: number;
  current_user: boolean;
  leaderboard: leaderboardType[];
  game_over: boolean;
}

const initialState: StateType = {
  user_one_name: "IronMan",
  user_two_name: "",
  background_image:
    "https://64.media.tumblr.com/e2fae2d22c00f60903c0e27f642e5c31/8cc5a7f4e87cb826-8d/s1280x1920/8a9f05a5f25b87cf3e1cbc962dd7e08924184ad5.jpg",
  user_one_avatar: "hero.gif",
  user_two_avatar: "",
  user_one_points: 0,
  user_two_points: 0,
  current_user: false,
  leaderboard: [],
  game_over: false,
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
    case ADD_BACKGROUND:
      return { ...state, background_image: action.payload };
    case ADD_USER_ONE_AVATAR:
      return { ...state, user_one_avatar: action.payload };
    case ADD_USER_TWO_AVATAR:
      return { ...state, user_two_avatar: action.payload };
    case ADD_USER_ONE_POINTS:
      return { ...state, user_one_points: state.user_one_points + 1 };
    case ADD_USER_TWO_POINTS:
      return { ...state, user_two_points: state.user_two_points + 1 };
    case CURRENT_USER:
      return { ...state, current_user: !state.current_user };
    case RESET_USER_SCORE:
      return { ...state, user_one_points: 0, game_over: false };
    case GET_FROM_DATABASE:
      return { ...state, leaderboard: action.payload };
    case GAME_OVER:
      return { ...state, game_over: true };
    default:
      return state;
  }
};
