import React, { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { Modal } from "./Modal/Modal";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from './Button/Button'
import { fetchImages } from './helpers/request';

export class App extends Component{
  state = {
    quantity: 12,
    queue:'',
    images: [],
    isLoading: false,
    error: false,
    modalOpen: false,
    bigImageUrl:''
  }

   async componentDidUpdate(prevProps, prevState) {
    
     if (this.state.isLoading) {
      const images=await fetchImages(this.state.queue,this.state.quantity)
            this.setState({
       images: images,
       isLoading:false
     })
      }
  }
  
  addMoreImages = () => { 
    this.setState({isLoading:true})
    const { quantity } = this.state
    let number = quantity
    number+=12
     this.setState({ quantity: number })
    console.log( this.state.images )
    
  }
  
  handleSubmit = (data) => {
     this.reset();
     this.setState({queue:data, isLoading:true})
  }
  toggleModal = (bigUrl) => {
    this.setState(
      ({ modalOpen }) => ({
        bigImageUrl: bigUrl ? bigUrl : '',
        modalOpen: !modalOpen
      })
    )
  
}

   reset = () => {
    this.setState({
      quantity: 12,
    queue:'',
    images: [],
    isLoading: false,
    error: false,
    modalOpen: false,
    bigImageUrl:''
    });
  };

  render() {
    const {  images, modalOpen,bigImageUrl,isLoading } = this.state
    
    return (
      
    <div
     className='App'
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading&&<Loader/>}
        {images.length !== 0 &&
          <>
          <ImageGallery imagesArr={images} toggleModal={this.toggleModal} />
        <Button onClick={this.addMoreImages} />
          {modalOpen && (<Modal imageUrl={bigImageUrl} modalToggle={this.toggleModal} />)}
        </>
        
         
      }
    </div>
  );
    
  }
};
