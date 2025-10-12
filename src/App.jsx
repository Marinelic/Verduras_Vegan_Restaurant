import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Special from './components/Special.jsx';
import Video from './components/Video.jsx';
import GallerySection from './components/GallerySection.jsx';
import ScrollSection from './components/ScrollSection.jsx';


function App() {
  return (
    <div>
      <Header />
    
      <ScrollSection>
        <Hero />
      </ScrollSection>

      <ScrollSection>
        <About />
      </ScrollSection>

      <ScrollSection>
        <Special />
      </ScrollSection>

      <ScrollSection>
        <Video />
      </ScrollSection>

      <ScrollSection>
        <GallerySection />
      </ScrollSection>
    </div>

    
  ) 
}

export default App
