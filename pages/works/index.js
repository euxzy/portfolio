import Layouts from '../../components/Layouts';

export default function Works() {
  return (
    <>
      <Layouts pageTitle=" | Works">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="absolute bottom-0 left-0 text-9xl font-bold text-secondary-dark">WORKS</div>

          <div className="relative flex w-4/5 items-center justify-evenly">
            <div className="h-44 w-1/4 rounded-md bg-primary-light">
              <div>Project 1</div>
            </div>
            <div className="h-44 w-1/4 rounded-md bg-primary-light">
              <div>Project 1</div>
            </div>
            <div className="h-44 w-1/4 rounded-md bg-primary-light">
              <div>Project 1</div>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
}
