import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="py-16 lg:px-16 px-7">
        <div className="container mx-auto flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className='text-4xl font-bold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <SearchBar />
      </div>
    </main>
  );
}
