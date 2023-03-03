import {
  ADD_BACKGROUND,
  ADD_USER_ONE,
  ADD_USER_ONE_AVATAR,
  ADD_USER_ONE_POINTS,
  ADD_USER_TWO,
  ADD_USER_TWO_AVATAR,
  ADD_USER_TWO_POINTS,
  CURRENT_USER,
} from "../ActionTypes/ActionTypes";

export const action = "action/type";

export const AddUserOne = (user_one: string) => (dispatch: any) => {
  dispatch({ type: ADD_USER_ONE, payload: user_one });
};

export const AddUserTwo = (user_two: string) => (dispatch: any) => {
  dispatch({ type: ADD_USER_TWO, payload: user_two });
};

export const AddBackground = (background_image: string) => (dispatch: any) => {
  dispatch({ type: ADD_BACKGROUND, payload: background_image });
};

export const AddUserOneAvatar =
  (user_one_avatar: string) => (dispatch: any) => {
    dispatch({ type: ADD_USER_ONE_AVATAR, payload: user_one_avatar });
  };

export const AddUserTwoAvatar =
  (user_two_avatar: string) => (dispatch: any) => {
    dispatch({ type: ADD_USER_TWO_AVATAR, payload: user_two_avatar });
  };

export const AddUserOnePoints = () => (dispatch: any) => {
  dispatch({ type: ADD_USER_ONE_POINTS });
};

export const AddUserTwoPoints = () => (dispatch: any) => {
  dispatch({ type: ADD_USER_TWO_POINTS });
};

export const currentUser = () => (dispatch: any) => {
  dispatch({ type: CURRENT_USER });
};
