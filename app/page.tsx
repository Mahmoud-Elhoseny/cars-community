'use client';
import { CarCard, CustomFilter, Hero, SearchBar } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils';
import { useState, useEffect } from 'react';

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState('');

  const getCars = () => {
    const cars = fetchCars({
      manufacturer: manufacturer || '',
      model: model || '',
      year: year || 2022,
      fuel: fuel || '',
    });
    setAllCars(cars);
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, year, fuel]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={(value) => setYear(Number(value))}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard
                  car={car}
                  key={`${car.make}-${car.model}-${car.year}`}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
