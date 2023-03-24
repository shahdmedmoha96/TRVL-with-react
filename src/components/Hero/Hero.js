import React from 'react'
import Button from "../Button/Button"
// import "../App"
import style from  '../Button/Button.module.css';
import"./Hero.css"
function Hero() {
  return (
    <>
       <div className='hero-contanier'>
       
        <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
     <div className='hero-btns'>
        <Button buttonSize={style.btn__large} buttonStyle={style.btn__outline} >   GET STARTED</Button>
        <Button
        buttonSize={style.btn__large} buttonStyle={style.btn__primary}
      
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
     </div>
        </div> 
      
    </>
  )
}

export default Hero
