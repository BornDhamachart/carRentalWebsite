import axios from "axios";
import { FilterProps } from "@/types";

//GET
export const GET_CARS_REQUEST = (filters: FilterProps) => {
  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters.make}&year=${filters.year}&model=${filters.model}&limit=${filters.limit}&fuel_type=${filters.fuel}`,
    headers: {
      "X-RapidAPI-Key": "f74dfdbdd3msh9ab8ce44e8b0c95p140a5ejsnc67335fbccbc",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  }).then((res) => {
    return res.data;
  });
};
