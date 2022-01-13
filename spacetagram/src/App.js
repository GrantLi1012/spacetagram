import { useEffect, useState } from 'react';
import planetLogo from './img/planetIcon.svg';
import space1 from './img/space1.jpg';
import space2 from './img/space2.jpg';
import { PictureBox } from './components/PictureBox/PictureBox';
import './App.css';

function App() {
  const API_KEY = '8iqFrhDoaPPaeRWEVsu3Z3rFm0kACPa2bgLlKcRa';
  const DATE_START = '2019-09-17';
  const DATE_END = '2019-09-27';
  const [apodData, setApodData] = useState('');

  function getApodData() {
    fetch(`https://api.nasa.gov/planetary/apod?start_date=${DATE_START}&end_date=${DATE_END}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setApodData(data);
        console.log(data);
      });
  };

  function getApodGrid() {
    return (
      <div className='grid'>
        {
          apodData.map(item => {
            return (
              <PictureBox
                image={item.url}
                title={item.title}
                date={item.date}
                text={item.explanation}
              />
            )
          })
        }
      </div>
    );
};

  useEffect(() => { getApodData(); }, []);

  return (
    <div className="App">
      <div className="header">
        <img src={planetLogo} className="logo" alt="logo" />
        Spacetagram
        <img src={planetLogo} className="logo" alt="logo" />
      </div>
      <div className="body">
        {apodData ? getApodGrid() : <div>Loading...</div>}
      </div>
    </div>
  );
}

export default App;
