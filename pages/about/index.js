import Layouts from '../../components/Layouts';

export default function About() {
  const skills = require('../../data/skills.json');

  return (
    <>
      <Layouts pageTitle=" | About">
        <div className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
          <div className="title-page">ABOUT</div>
          <div className="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3">
            <div className="my-5 mr-2 text-left font-semibold text-primary-light">My Skills</div>
            <div className="flex w-4/5 flex-wrap justify-evenly">
              {skills.map((skill) => (
                <div key={skill.id} className="my-2 ml-4 h-14 w-14 rounded-lg fill-secondary-light transition-all duration-500 hover:bg-secondary-dark hover:fill-primary-light">
                  <svg className="p-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={skill.svg} />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 my-10 w-3/4 text-justify md:order-2 md:my-0 md:w-1/4">
            <div className="text-lg font-light text-primary-light">Hello! My name is Muhamad Rijal, you can call me Rijal, Euxzy, CicakUngu or whatever you want. I'm a Front-End Developer and also a Network Engineer</div>
          </div>
        </div>
      </Layouts>
    </>
  );
}
