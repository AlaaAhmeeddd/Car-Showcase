import { fuels, yearsOfProduction } from "@/@constants";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "../../utils";
import CarCard from "@/components/CarCard";

export default async function Home() {
  const returnedCars = await fetchCars()
  console.log(returnedCars)
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="py-16 lg:px-16 px-7">
        <div className="container mx-auto flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className='text-4xl font-bold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4 mt-8">
          <SearchBar />
          <div className="flex gap-2">
            <CustomFilter title='fuel' list={fuels} />
            <CustomFilter title='year' list={yearsOfProduction} />
          </div>
        </div>
        <div>
          { returnedCars.length == 0 || !Array.isArray(returnedCars) ? 
              (
                <div className="mt-16 flex justify-center items-center flex-col gap-2">
                  <h2 className='text-black text-2xl font-semibold'>Oops, no results</h2>
                  <p>{returnedCars?.message}</p>
                </div>
              )
              : (
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                  {
                    returnedCars?.map((car, index)=>(
                      <CarCard key={index} car={car} />
                    ))
                  }
                </div> 
              )  
          }
        </div>
      </div>
    </main>
  );
}
