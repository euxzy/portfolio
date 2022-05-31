import Layouts from '../../components/Layouts';

export default function Contact() {
  return (
    <>
      <Layouts pageTitle=" | Contact">
        <div className="relative flex h-screen w-full items-center justify-evenly overflow-hidden">
          <div className="absolute bottom-0 left-0 text-9xl font-bold text-secondary-dark">CONTACT</div>
          <div className="w-1/3 text-right">
            <div className="my-4 flex justify-end">
              <div className="mr-12">
                <h4 className="text-lg">Email</h4>
                <h3 className="text-sm font-normal">mhd.rijal203@gmail.com</h3>
              </div>
              <div className="h-12 w-12 bg-white"></div>
            </div>
            <div className="my-4 flex justify-end">
              <div className="mr-12">
                <h4 className="text-lg">Phone</h4>
                <h3 className="text-sm font-normal">+62 858-6408-9403</h3>
              </div>
              <div className="h-12 w-12 bg-white"></div>
            </div>
            <div className="my-4 flex justify-end">
              <div className="mr-12">
                <h4 className="text-lg">Github</h4>
                <h3 className="text-sm font-normal">github.com/euxzy</h3>
              </div>
              <div className="h-12 w-12 bg-white"></div>
            </div>
            <div className="my-4 flex justify-end">
              <div className="mr-12">
                <h4 className="text-lg">Facebook</h4>
                <h3 className="text-sm font-normal">facebook.com/mhd.rijal.161</h3>
              </div>
              <div className="h-12 w-12 bg-white"></div>
            </div>
            <div className="my-4 flex justify-end">
              <div className="mr-12">
                <h4 className="text-lg">Instagram</h4>
                <h3 className="text-sm font-normal">instagram.com/_mhdrijal</h3>
              </div>
              <div className="h-12 w-12 bg-white"></div>
            </div>
          </div>

          <div className="w-1/3">
            <form>
              <div className="w-4/5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mb-3 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-300 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:outline-none"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mb-3 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-300 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:outline-none"
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  id="message"
                  className="mb-2 h-40 w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 transition duration-300 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:outline-none focus:border-primary-light focus:bg-secondary-dark focus:outline-none"
                  placeholder="Write your message..."
                />
                <input
                  type="submit"
                  value="Send Message"
                  className="w-full rounded-md border border-secondary-light bg-primary-dark px-4 py-1 text-secondary-light transition duration-300 ease-in-out placeholder:text-secondary-light hover:border-primary-light hover:bg-secondary-dark hover:text-primary-light hover:outline-none focus:border-primary-light focus:outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      </Layouts>
    </>
  );
}
