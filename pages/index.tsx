import Hero from "@/components/Hero";
import SearchComponent from "@/components/SearchComponent";
import CarCard from "@/components/CarCard";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import { useGetCars } from "@/hooks/useGetCars";
import React, { useState, useEffect } from "react";
import { Space, Spin } from "antd";
import { FilterProps, CarProps } from "@/types";
import { searchInitialValue } from "@/constants";

export default function Home() {
  const [filters, setFilters] = useState<FilterProps>(searchInitialValue);

  const {
    data: getCarsData,
    isFetching: isFetchingGetCarsData,
    refetch: refetchGetCarsData,
  } = useGetCars(filters);

  // useEffect(() => {
  //   console.log("getCarsData", getCarsData);
  // }, [getCarsData]);

  useEffect(() => {
    refetchGetCarsData();
  }, [filters]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 w-full">
        <div className="flex flex-col items-start justify-start gap-y-3 text-black-100 px-16">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <div className="text-gray-500">Explore out cars you might like</div>
        </div>

        <SearchComponent setFilters={setFilters} />

        {isFetchingGetCarsData === true ? (
          <div className="flex justify-center w-full my-12">
            <Space size="middle">
              <Spin />
            </Space>
          </div>
        ) : (
          <>
            {getCarsData.length > 0 ? (
              <section>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                  {/* {getCarsData?.map((car:CarProps) => (
                    <CarCard car={car} />
                  ))} */}
                </div>

                <div className="flex justify-center">
                  <button
                    className="bg-primary-blue text-white rounded-full mt-10 py-2 px-4"
                    onClick={() => {
                      setFilters((prevState) => ({
                        ...prevState,
                        limit: prevState.limit + 10,
                      }));
                    }}
                  >
                    Show More
                  </button>
                </div>
              </section>
            ) : (
              <div className="mt-16 flex justify-center items-center">
                <h2 className="text-black text-xl font-bold">No results</h2>
              </div>
            )}
            
          </>
        )}
        <Testimonial />
            <Faq />
      </div>
    </main>
  );
}
