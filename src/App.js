import './App.css';
import 'animate.css';
import 'tailwindcss/tailwind.css'
import Nav from './components/navigasi/Nav';
import Main from './components/main/Main';
import Aboutme from './components/aboutme/Aboutme';
import Portofolio from './components/portofolio/Portofolio';

import { useState, useEffect } from 'react';
import Loading from './components/loadiing/Loading';
import Footer from './components/footer/Footer';



function App() {
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    setLoading(false)             
  }, []);

  return (
   <div>
    {
      loading ? (
        <Loading />
        ):(
          <div>
            <Nav />
            <Main />
            <Aboutme />
            <Portofolio />
            <Footer />
          </div>
        )            
    }

    
   </div>
    
  )
}

export default App;
