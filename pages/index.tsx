import Image from 'next/image'
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import {useGetCars} from "@/hooks/useGetCars";
import React, { useState, useEffect } from "react";

export default function Home() {

  const filters = {
    model : "camry"
  }

  const {
    data: getCarsData,
    isLoading: isLoadingGetCarsData,
    isFetching: isFetchingGetCarsData,
    isError: isErrorGetCarsData,
    refetch: refetchGetCarsData,
  } = useGetCars(filters);

  useEffect(() => {
      console.log("getCarsData", getCarsData);
  }, [getCarsData]);


  return (
    <main className="overflow-hidden">
        {/* <Hero /> */}
        <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          {/* <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p> */}
        </div>

        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar />

          {/* <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div> */}
        </div>
        </div>
    </main>
  );
}
