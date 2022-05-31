import Layouts from '../components/Layouts';

export default function Home() {
  return (
    <>
      <Layouts>
        <div className="relative flex h-screen w-full items-center justify-evenly overflow-hidden">
          <div className="absolute left-0 bottom-0 text-9xl font-bold text-secondary-dark">EUXZY</div>
          <div className="relative flex w-1/3 justify-end">
            <div className="absolute mt-20 h-96 w-3/5 -rotate-12 rounded-xl bg-[#464646]" />
            <div className="absolute mt-20 h-96 w-3/5 -rotate-3 rounded-xl bg-secondary-light" />
            <div className="relative mt-20 h-96 w-3/5 rotate-2 rounded-xl bg-primary-light" />
          </div>
          <div className="w-1/3">
            <div className="-mb-5 text-base font-normal">Hi! My name is</div>
            <div className="-ml-1 text-7xl font-semibold">euxzy</div>
            <div className="text-sm font-thin">Front-end Dev | Network Engineer</div>
          </div>
        </div>
      </Layouts>
    </>
  );
}
