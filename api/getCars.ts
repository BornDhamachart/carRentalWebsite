import axios from "axios";
import { FilterProps } from "@/types";

//GET
export const GET_CARS_REQUEST = (filters: FilterProps) => {
  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${filters.model}`,
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  }).then((res) => {
    return res.data;
  });
};
