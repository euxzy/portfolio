import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function About() {
  return (
    <>
      <Navbar />

      <div className="flex h-screen w-full items-center justify-evenly">
        <div className="w-1/3 text-right text-9xl">About</div>
        <div className="w-1/3 text-justify">
          <div className="text-lg">Hello! My name is Muhamad Rijal, you can call me Rijal, Euxzy, CicakUngu or whatever you want.</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
