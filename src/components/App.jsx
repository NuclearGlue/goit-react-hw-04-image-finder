import React, { Component } from 'react';
import { useState, useEffect } from "react";

import  Searchbar  from "./Searchbar/Searchbar";
import  Modal  from "./Modal/Modal";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from './Button/Button'
import { fetchImages } from './helpers/request';

const App =()=>{
  
    const [quantity, setQuantity] =useState(12)
    const [queue,setQueue]=useState('')
    const [images,setImages]=useState([])
    const [isLoading, setIsLoading]=useState(false)
    const [modalOpen, setModalOpen] =useState(false)
    const [bigImageUrl, setBigImageUrl]=useState('')
  

  useEffect(() => {
    if (isLoading) {
     const getImages = async() => {
       const images = await fetchImages(queue, quantity)
       setImages(images)
      }
      getImages().catch(console.error)
      setIsLoading(false)
   }
  }, [isLoading])
      
  
  



  const addMoreImages = () => { 
    setIsLoading(true)
    let number = quantity
    number+=12
    setQuantity(number)
    console.log( images )
    
  }
  
  const handleSubmit = (data) => {
     reset();
    setQueue(data);
    setIsLoading(true);

    
  }
  
  const toggleModal = (bigUrl) => {
setBigImageUrl(bigUrl ? bigUrl : '')
setModalOpen(!modalOpen)
  
}

   const reset = () => {
     setQuantity(12)
     setQueue('')
     setImages([])
     setIsLoading(false)
   
     setModalOpen(false)
     setBigImageUrl('')
     
  };

 
  
    
    return (
      
    <div
     className='App'
      >
        <Searchbar onSubmit={handleSubmit} />
        {isLoading&&<Loader/>}
        {images.length !== 0 &&
          <>
          <ImageGallery imagesArr={images} toggleModal={toggleModal} />
        <Button onClick={addMoreImages} />
          {modalOpen && (<Modal imageUrl={bigImageUrl} modalToggle={toggleModal} />)}
        </>  
      }
    </div>
  );
    
  
};

export default App;