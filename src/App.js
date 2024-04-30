import './App.css';
import CarPole from './components/CarPole';
import ConnectingEv from './components/ConnectingEv';
import ContactUs from './components/ContactUs';
import Contractors from './components/Contractors';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import OwnersAndOperators from './components/OwnersAndOperators';
import WhyItMatters from './components/WhyItMatters';

function App() {
  return (
    <div className="App">
      <Hero />
      <ConnectingEv />
      <OwnersAndOperators />
      <OurServices />
      <WhyItMatters />
      <CarPole />
      <Contractors />
      <Faq />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
