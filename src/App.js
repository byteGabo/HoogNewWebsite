import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home'
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Clients from './components/clients/Clients';
import Contact from './components/contact/Contact';


function App() {
  return (
   <>
   <Sidebar />
   <main className="main">
    <Home />
    <Services />
    <Portfolio />
    <Pricing />
    <Clients />
    <Contact />
   </main>
   </>
  )
}

export default App;
