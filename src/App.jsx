import VideoScrollControl from "./components/Video"
import SplineScene from "./components/SplineHome"
import TextAnimations from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  
  return (
    <main className='bg-white flex-col justify-between'>
     
      <SplineScene />
      <VideoScrollControl />
      <Footer />
      
    </main>
  )
}

export default App
