import {
    useQuery,
    useMutation,
    useQueryClient,
    UseQueryResult,
  } from '@tanstack/react-query';
  import {
    GET_CARS_REQUEST
  } from "@/api/getCars";

export const useGetCars = (
    filters?: any,

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