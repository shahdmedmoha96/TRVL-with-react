import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom';
import image1 from "../images/img-1.jpg"
import image2 from "../images/img-2.jpg"
import image3 from "../images/img-3.jpg"
import image4 from "../images/img-4.jpg"
import image5 from "../images/img-5.jpg"
function Cards() {
  return (
    <>
      <div className='card-container'>
        <h4>Check out these EPIC Destinations!</h4>
        <div className='cards-items'>
          <Link className='card-item' to='/'>
          <div className='image'>   
        <img src={image1}  />
        <h5>Adventure</h5>
        </div>
        <div className='text'>
        Explore the hidden waterfall deep inside the Amazon Jungle
        </div>  
    </Link>
    <Link className='card-item' to='/services'> 
   
        <div className='image'>
        <img src={image2}/>
        <h5>Luxury</h5>
        </div>
        <div className='text'>
        Travel through the Islands of Bali in a Private Cruise
        </div>  
 
    </Link>
    <Link className='card-item' to='/products'> 
  
        <div className='image'>
        <img src={image3}/>
        <h5>Mystery</h5>
        </div>
        <div className='text'>
        Set Sail in the Atlantic Ocean visiting Uncharted Waters
        </div>  
   
  
    </Link>
    <Link className='card-item' to ='/development'>
   
        <div className='image'>
        <img src={image4}/>
        <h5>Adventure</h5>
        </div>
        <div className='text'>
        Explore the hidden waterfall deep inside the Amazon Jungle
        </div>  
   
  
    </Link >
    <Link className='card-item'  to ='/consulting'> 
  
        <div className='image'>
        <img src={image5}/>
        <h5>Adventure</h5>
        </div>
        <div className='text'>
        Explore the hidden waterfall deep inside the Amazon Jungle
        </div>  
  
    </Link>
        </div>
      </div>
    </>
  )
}

export default Cards
