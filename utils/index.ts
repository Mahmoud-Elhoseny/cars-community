import { CarProps, FilterProps } from '@/types';
import carData from './carData.json'; // Import the local JSON file

export const fetchCars = (filters: FilterProps) => {
  const { manufacturer, year, model, fuel } = filters;

  return carData.filter((car) => {
    const matchManufacturer = !manufacturer || car.make.toLowerCase().includes(manufacturer.toLowerCase());
    const matchModel = !model || car.model.toLowerCase().includes(model.toLowerCase());
    const matchYear = !year || car.year === year;
    const matchFuel = !fuel || car.fuel_type === fuel.toLowerCase();

    return matchManufacturer && matchModel && matchYear && matchFuel;
  });
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
