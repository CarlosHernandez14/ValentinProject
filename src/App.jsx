import { useState } from 'react'
import './App.css'

import gif from './assets/rose-6870_512.gif';
import video from './assets/VideoTravelEditado.mp4';
import audio from './assets/videoplayback.m4a';

import bg from './assets/bg-night.jpg';

const App = () => {
  const [noCount, setNoCount] = useState(0);

  const sound = new Audio(audio);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Modify the size of the yes button respect to noCount value
    const yesBtn = document.getElementById('yes-btn');
    //yesBtn.style.fontSize = `${noCount * 2}rem`;

    // Asign the pulse class to the yes button
    yesBtn.classList.add('pulse');

    // Remove the pulse class aftert animation ends
    yesBtn.addEventListener('animationend', () => {
      yesBtn.classList.remove('pulse');
    });
    
    const noBtn = document.getElementById('no-btn');

    noBtn.classList.add('shake');

    noBtn.addEventListener('animationend', () => {
      noBtn.classList.remove('shake');
    });

    switch (noCount) {
      case 0:
        alert('Estas segura?');
        break;
      case 1:
        alert('De verdad no quieres ser mi valentin?');
        break;
      case 2:
        alert('Andale no seas mala, di que si');
        break;
      case 3:
        alert('Yo si quiero ser tu valentin');
        break;
      default:
        alert('No puedes decir que no, no te dejare ir');
        break;
    }
  }

  const handleYesClick = () => {

    if (!sound.paused) {
      sound.pause();
      sound.currentTime = 0;
    }

    sound.play();

    const questionContainer = document.getElementById('question-container');
    const yesContainer = document.getElementById('yes-container');

    questionContainer.classList.add('hidden');

    document.body.style.backgroundImage = `url(${bg})`;

    const video = yesContainer.querySelector('video');
    if (video.paused) {
      video.play();
    }

    setTimeout(() => {
      questionContainer.style.display = 'none';
      yesContainer.style.display = 'block';

      yesContainer.offsetWidth;
      yesContainer.classList.remove('hidden');
    }, 500);

  }
  return (
    <>
      <div className='main-container' id='question-container'>
        <img src={gif} alt="No se pudo cargar la imagen :(" />
        <h1>¿Quieres ser mi valentin?</h1>
        <div className='container-buttons'>
          <button id='yes-btn' onClick={handleYesClick}>Si</button>
          <button id='no-btn' onClick={handleNoClick}>No</button>
        </div>
      </div>
      <div className='main-container container-extras' style={{display: 'none'}} id='yes-container'>
        <h1>Gracias por aceptar ser mi valentin</h1>
        <video controls loop autoPlay>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <h1>Te amo con todo mi corazon</h1>
      </div>
    </>
  )
}

export default App;
