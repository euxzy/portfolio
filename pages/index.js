import Layouts from '../components/Layouts';

export default function Home() {
  return (
    <>
      <Layouts>
        <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
          <span className="title-page">EUXZY</span>

          <div className="relative order-2 flex w-1/2 justify-end md:order-1 md:w-1/3">
            <div className="card-home absolute -rotate-12 bg-[#464646]" />
            <div className="card-home absolute -rotate-3 bg-secondary-light" />
            <div className="card-home relative rotate-2 bg-primary-light" />
          </div>

          <div className="relative order-1 w-1/3 md:order-2">
            <h3 className="-mb-5 text-base font-normal">Hi! My name is</h3>
            <h1 className="-ml-1 mb-1 text-7xl font-bold text-primary-light">euxzy</h1>
            <h4 className="text-sm font-light transition-all duration-500 hover:text-primary-light">Front-end Dev | Network Engineer</h4>
          </div>
        </section>
      </Layouts>
    </>
  );
}
