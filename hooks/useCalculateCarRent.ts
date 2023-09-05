export const useCalculateCarRent = (city_mpg: number, year: number) => {
    const pricePerDay : number = 50; 
    const mileageFactor : number = 0.1; 
    const ageFactor : number = 0.05; 
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = pricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
