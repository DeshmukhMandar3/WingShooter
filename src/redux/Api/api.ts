import axios from "axios";

type props = {
  name: string;
  points: number;
};

export const AddToDatabaseAPI = ({ name, points }: props) => {
  return axios.post("https://frail-long-johns-toad.cyclic.app/user/addPoints", {
    name,
    points,
  });
};

export const GetFromDatabaseAPI = () => {
  return axios.get("https://frail-long-johns-toad.cyclic.app/user/getPoints");
};
