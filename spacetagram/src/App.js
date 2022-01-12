import planetLogo from './img/planetIcon.svg';
import space1 from './img/space1.jpg';
import space2 from './img/space2.jpg';
import { PictureBox } from './components/PictureBox/PictureBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={planetLogo} className="logo" alt="logo" style={{filter:'invert(1)'}} />
        Spacetagram
        <img src={planetLogo} className="logo" alt="logo" style={{filter:'invert(1)'}} />
      </div>
      <div className="body">
        <PictureBox image={space1} text={'Test text'} />
        <PictureBox image={space2} text={'Test text'} />
        <PictureBox image={space1} text={'Test text'} />
        <PictureBox image={space2} text={'Test text'} />
      </div>
    </div>
  );
}

export default App;
