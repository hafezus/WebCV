import Bio from './components/Bio'
import Sliders from './components/Sliders'
import Socials from './components/Socials'
import Wallpaper from './Constellation_BG.png'

function App() {
  return (
    <div className="App" style={{maxHeight: '100vh', background: {Wallpaper}}}>
      <Socials />
      <Bio />
      <Sliders/>
    </div>
  );
}

export default App;
