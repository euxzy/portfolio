import Layouts from '../../components/Layouts/Layouts';

export default function Contact() {
  return (
    <>
      <Layouts pageTitle="| Contact">
        <div className="flex h-screen w-full items-center justify-evenly">
          <div className="w-1/3 text-right">
            <div>
              <h4 className="text-sm font-extralight">Contact</h4>
              <h3 className="text-lg font-normal">+62 858 xxxx xxxx</h3>
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
