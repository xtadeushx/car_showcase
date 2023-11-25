import { Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils';
// import { fetchCars, fetchTodos } from '@/utils'
import { v4 as uuidv4 } from 'uuid';

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main
      className="overflow-hidden"
    >
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discovery">
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">

        </div>
        <SearchBar />

        <div className="home__filter-container">
          {/* <CustomFilter title="fuel" />
          <CustomFilter title="year" /> */}
        </div>
        {isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                // <CarCard key={uuidv4()} car={car}/>
                <p>{car.model}</p>
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>)
        }
      </div>
    </main>
  )
}
