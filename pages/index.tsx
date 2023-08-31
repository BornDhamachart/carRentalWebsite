import Image from 'next/image'
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import ShowMore from "@/components/ShowMore";
import CarCard from "@/components/CarCard";
import {useGetCars} from "@/hooks/useGetCars";
import React, { useState, useEffect } from "react";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

export default function Home({ searchParams }: HomeProps) {

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

  const isDataEmpty = !Array.isArray(getCarsData) || getCarsData.length < 1 || !getCarsData;


  return (
    <main className="overflow-hidden">
        <Hero />
        <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar />

          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {getCarsData?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {/* <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > getCarsData.length}
            /> */}
          </section>
        ) : (
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{getCarsData?.message}</p>
          </div>
        )}
        </div>
    </main>
  );
}
