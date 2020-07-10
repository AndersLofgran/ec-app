import React from 'react'
import camilleBioImg from '../../../assets/camille_bio.jpg'
import './Bio.scss'

const Bio = () => {
  return (
    <div className='bio'>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={camilleBioImg} alt='Camille Cornaby'/>
        <div>
          <h1>Hi, I'm</h1>
          <h1>Camille</h1>
        </div>
      </div>
      <p>My content aims to allow everyone to bring the spiritual into their lives. My art is a direct reflection of my faith and hope for a better world. </p>
    </div>
  );
}
 
export default Bio;