import Layouts from '../../components/Layouts';

export default function About() {
  return (
    <>
      <Layouts pageTitle=" | About">
        <div className="relative flex h-screen w-full items-center justify-evenly overflow-hidden">
          <div className="absolute bottom-0 left-0 text-9xl font-bold text-secondary-dark">ABOUT</div>
          <div className="relative flex w-1/3 flex-col items-end justify-end">
            <div className="my-5 text-left font-bold">My Skills</div>
            <div className="flex w-4/5 flex-wrap justify-evenly">
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">HTML</div>
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">CSS</div>
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">JS</div>
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">PHP</div>
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">React JS</div>
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">Tailwind CSS</div>
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">Bootstrap</div>
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">Node JS</div>
              <div className="my-2 mx-2 h-14 w-14 bg-primary-light text-secondary-dark">Laravel</div>
            </div>
          </div>

          <div className="relative w-1/4 text-justify">
            <div className="text-lg">Hello! My name is Muhamad Rijal, you can call me Rijal, Euxzy, CicakUngu or whatever you want. I'm a Front-End Developer and also a Network Engineer</div>
          </div>
        </div>
      </Layouts>
    </>
  );
}
