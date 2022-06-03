import Layouts from '../../components/Layouts';

export default function Works() {
  const projects = require('../../data/projects.json');

  return (
    <>
      <Layouts pageTitle=" | Works">
        <div className="relative flex w-full items-center justify-center py-40 md:h-screen md:overflow-hidden">
          <div className="title-page">WORKS</div>

          <div className="relative flex w-4/5 flex-wrap items-center justify-evenly">
            {projects.map((project) => (
              <div key={project.id} className="m-5 flex h-44 w-full items-center justify-center rounded-md bg-primary-light md:w-1/4">
                <div className="text-xl font-medium text-primary-dark">{project.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Layouts>
    </>
  );
}
