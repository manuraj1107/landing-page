import VideoScrollControl from "./components/Video"
import SplineScene from "./components/SplineHome"
import TextAnimations from "./components/Contact"
import Footer from "./components/Footer"
import Categories from "./components/Categories"
import Features from "./components/Features"


function App() {
  
  return (
    <main className='bg-white flex-col justify-between'>
     
      <SplineScene />
      <VideoScrollControl />
      <Footer />
      <Features />
      <Categories />
    </main>
  )
}

export default App
