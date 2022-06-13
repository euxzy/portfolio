import { useRouter } from 'next/router';
import { Projects } from '../../data/Projects';
import Layouts from '../../components/Layouts';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const getProject = Projects.find((project) => project.slug === id);

  return (
    <Layouts pageTitle=" | Works">
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h1 className="mb-5 w-2/3 text-center text-5xl text-primary-light md:w-1/2">Details {getProject.name}</h1>
        <p className="w-3/5 text-justify">{getProject.description}</p>
      </div>
    </Layouts>
  );
};

export default ProjectDetail;
