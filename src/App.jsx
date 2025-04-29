import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'


const PricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
  

  return (
    <>
   <header>
   <NavBar></NavBar>
   {/* <DaisyNav></DaisyNav> */}
   </header>
   <main>

       <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
       </Suspense>
   </main>
    </>
  )
}

export default App
