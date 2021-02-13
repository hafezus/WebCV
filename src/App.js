import Bio from './components/Bio'
import Sliders from './components/Sliders'
import Wallpaper from './Constellation_BG.png'

function App() {
  return (
    <div className="App" style={{maxHeight: '100vh', background: {Wallpaper}}}>
      <Bio />
      <Sliders/>
    </div>
  );
}

export default App;
