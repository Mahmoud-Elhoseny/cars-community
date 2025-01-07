import axios from 'axios';

export const fetchCars = async () => {
  try {
    const response = await axios.get(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
      {
        headers: {
          'x-rapidapi-key':
            'd76dbb1064msh1c6d3a903d3c89ep19ccd4jsn1959349d299c',
          'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};
