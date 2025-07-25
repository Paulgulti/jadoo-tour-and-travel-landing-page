import BookTrip from "./components/BookTrip"
import Destinations from "./components/Destinations"
import Footer from "./components/Footer"
import HeroContent from "./components/HeroContent"
import PartnersAndSubscription from "./components/PartnersAndSubscription"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"


function App() {

  return (
    <div className="container mx-auto">
      <HeroContent/>
      <Services/>
      <Destinations/>
      <BookTrip/>
      <Testimonials/>
      <PartnersAndSubscription/>
      <Footer/>
    </div>
  )
}

export default App
