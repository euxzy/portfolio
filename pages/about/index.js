import { Skills } from '../../data/Skills';
import Layouts from '../../components/Layouts';

const About = () => {
  return (
    <>
      <Layouts pageTitle=" | About">
        <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
          <span className="title-page">ABOUT</span>

          <div className="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3">
            <div className="my-5 mr-2 text-left font-semibold text-primary-light">My Skills</div>
            <div className="flex w-4/5 flex-wrap justify-evenly">
              {Skills.map((skill) => (
                <div key={skill.id} className="skills-icon">
                  <svg className="p-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={skill.svg} />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 my-10 w-3/4 text-justify md:order-2 md:my-0 md:w-1/4">
            <p className="text-lg font-light text-primary-light">Hello! My name is Muhamad Rijal, you can call me Rijal, Euxzy, CicakUngu or whatever you want. I'm a Front-End Developer and also a Network Engineer</p>
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default About;
