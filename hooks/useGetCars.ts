import {
    useQuery,
  } from '@tanstack/react-query';
  import {
    GET_CARS_REQUEST
  } from "@/api/getCars";
  import {FilterProps} from "@/types"

export const useGetCars = (
    filters: FilterProps,

  ) => {
    return useQuery(
      ["getCars"],
      async () => await GET_CARS_REQUEST(filters),
      {
        onError: (error: any) => console.log("Error message : ", error),
        enabled:true
      }
    );
  };