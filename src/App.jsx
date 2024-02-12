import { useState } from 'react'
import './App.css'

const App = () => {
  const [noCount, setNoCount] = useState(0);

  const sound = new Audio('/src/assets/videoplayback.m4a');

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
  }
  return (
    <>
      <div className='main-container'>
        <img src="/src/assets/mocha3.gif" alt="No se pudo cargar la imagen :(" />
        <h1>¿Quieres ser mi valentin?</h1>
        <div className='container-buttons'>
          <button id='yes-btn' onClick={handleYesClick}>Si</button>
          <button id='no-btn' onClick={handleNoClick}>No</button>
        </div>
      </div>
    </>
  )
}

export default App;
