import React, { useState } from 'react';
import "./Carousel.css";
import BootstrapCarousel from 'react-bootstrap/Carousel';

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='car-parent-container'>
            <div className='car-container'>
            <BootstrapCarousel activeIndex={index} onSelect={handleSelect}>
                <BootstrapCarousel.Item interval={3000}>
                <img src = "./assets/third_slide_image.jpg" width="4000px" height="800px" className="d-block w-100" alt="Third slide" />
                    <BootstrapCarousel.Caption>
                    <h3 className='h1-header'>Discover Bestsellers!</h3>
                        <p className='car-para'>Uncover the Most Acclaimed Reads of the Season</p>
                   
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item interval={3000}>
                    <img src = "./assets/second_slide_image.jpg" width="4000px" height="800px" className="d-block w-100" alt="Second slide" />
                    <BootstrapCarousel.Caption>
                    <h3 className='h1-header'>Unleash Your Imagination Into Reality!</h3>
                        <p className='car-para'>Explore Boundless Worlds and Create Your Own Stories with Our Diverse Collection</p>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item interval={3000}>
                <img src = "./assets/first_slide_image1.jpg" width="4000px" height="800px" className="d-block w-100" alt="First slide" />
                    <BootstrapCarousel.Caption>
                    
                        <h3 className='h1-header'>Journey Through Great Reads!</h3>
                        
                        <p className='car-para'>Explore the World of Endless Stories and Inspiration</p>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item interval={3000}>
                <img src = "./assets/fourth_slide_image.jpg" width="4000px" height="800px" className="d-block w-100" alt="Third slide" />
                    <BootstrapCarousel.Caption>
                    <h3 className='h1-header'>Navigate <br /> the Literary Landscape</h3>
                        <p className='car-para'>Embark on a Journey of Discovery Through Our Vast Library Collection</p>
                   
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
            </BootstrapCarousel>
        </div>
        </div>
    );
};

export default Carousel;
