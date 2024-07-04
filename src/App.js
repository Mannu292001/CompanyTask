// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Testimonials from "./components/Testimonials";
import reviews from "./data";
import Carousel from './components/Carousel';
import Accordion from './components/Accordion';
import Bannerform from './components/Bannerform';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <div>
        <div className=' '>
          <Navbar />
        </div>

        <div className="flex-grow p-4">
          <Bannerform />
        </div>

        <div className="flex-grow p-4">
          <Accordion />
        </div>

        <div className="flex-grow p-4 bg-gray-200">
          <Carousel />
        </div>
          
        <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

          <div className="text-center">

            <h1 className="text-4xl font-bold">Our Testimonials</h1>

            <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>

            <Testimonials reviews={reviews} />

          </div>

        </div>
        <div>
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
