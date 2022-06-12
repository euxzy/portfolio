import { useEffect, useRef } from 'react';
import { Projects } from '../../data/Projects';
import Layouts from '../../components/Layouts';

const Works = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const scrollX = () => (element.style.transform = `translateX(${-window.pageYOffset}px)`);

    window.addEventListener('scroll', scrollX);
    return () => window.removeEventListener('scroll', scrollX);
  }, []);

  return (
    <>
      <Layouts pageTitle=" | Works">
        <section className="relative flex h-[450vh] items-center justify-center">
          <span className="title-page">WORKS</span>

          <div className="fixed left-96 top-52 flex" ref={ref}>
            {Projects.map((project) => (
              <div key={project.id} className="mx-12 flex w-72 flex-col items-center justify-center rounded-md border-4 border-primary-light bg-primary-light">
                <div className="h-44 w-full rounded-md bg-primary-dark"></div>
                <div className="py-2 text-xl font-medium text-primary-dark">{project.name}</div>
                <div className="flex w-full justify-between px-5 pb-3">
                  <a href={project.demo} target="_blank">
                    <span className="rounded-md border-2 border-primary-dark px-3 py-2 font-semibold text-primary-dark transition-all duration-300 hover:bg-primary-dark hover:text-primary-light">View Demo</span>
                  </a>
                  <a href={project['source-code']} target="_blank">
                    <span className="rounded-md border-2 border-primary-dark px-1 py-2 font-semibold text-primary-dark transition-all duration-300 hover:bg-primary-dark hover:text-primary-light">Source Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="fixed top-0 right-0 h-screen w-1/12 bg-primary-dark" />
          <div className="fixed top-0 left-0 hidden h-3/4 w-1/12 bg-primary-dark md:block" />

          <div className="fixed bottom-40 flex flex-col items-center">
            <span className="text-primary-light">Scroll</span>
            <div className="absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-secondary-light" />
            <div className="absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-primary-light" />
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default Works;
