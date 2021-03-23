import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import OurNavBar from './components/NavBar'
import OurFooter from './components/Footer'
import OurWelcome from './components/Welcome'
import MyCarousel from './components/MainPage'

function App() {
  return (
    <div>
    <OurNavBar  title="SuperBooks" />
    <OurWelcome />
    <MyCarousel />
    <OurFooter />
    </div>
  );
}

export default App;
