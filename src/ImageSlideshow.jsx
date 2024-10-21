
// import React, { useState, useEffect } from 'react';

// const ImageSlideshow = () => {
//   // Array of actual image URLs
//   const images = [
//     'https://images.unsplash.com/photo-1728853487293-1a4c5c39b393?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your actual image URLs
//     'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1682124402813-b1ca3d9ae808?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     // Add more image URLs as needed
//   ];

//   // State to keep track of the current slide
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] =useState(false);

//   // Effect to update the current slide every 3 seconds
//   useEffect(() => {
//     if (isPaused) return;

//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, [isPaused,images.length]);

//   // Function to handle navigation to the previous slide
//   const handlePrevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
//   };

//   // Function to handle navigation to the next slide
//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//   };

//   return (
//     <div className="slideshow-container"

//       onMouseEnter={()=> setIsPaused(true)}
//       onMouseLeave={()=> setIsPaused(false)}
//       >
//       <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slideshow-image" />
//       {/* <button className="prev-button" onClick={handlePrevSlide}>
//         Prev
//       </button>
//       <button className="next-button" onClick={handleNextSlide}>
//         Next
//       </button> */}

// <button className="prev-button" onClick={handlePrevSlide}>
//   &#x25C0;
// </button>
// <button className="next-button" onClick={handleNextSlide}>
//   &#x25B6;
// </button>

//     </div>
//   );
// };

// export default ImageSlideshow;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// //import './ImageSlideshow.css'; // Import the CSS styles

// function ImageSlideshow() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     axios.get('https://xpand.onrender.com/api/content/6710f78b64b9de5448554a55', {
//       headers: {
//         'Authorization': 'Bearer e9b6c0207ecdd928383296944b2d8ce216a29d29b8c2f5b312de2520ecb8a198'
//       }
//     })
//       .then(response => {
//         const imageData = response.data; // Assuming the response data contains an array of image objects
//         setImages(imageData);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   const handlePrevSlide = () => {
//     setCurrentIndex(currentIndex - 1);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex(currentIndex + 1);
//   };

//   return (
//     <div className="slideshow-container">
//       {images.map((image, index) => (
//         <img
//           key={image.id}
//           src={image.url}
//           alt={`Image ${index + 1}`}
//           className={index === currentIndex ? 'slideshow-image active' : 'slideshow-image'}
//         />
//       ))}
//       <button className="prev-button" onClick={handlePrevSlide}>
//         &#x25C0;
//       </button>
//       <button className="next-button" onClick={handleNextSlide}>
//         &#x25B6;
//       </button>
//     </div>
//   );
// }

// export default ImageSlideshow;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// //+import './ImageSlideshow.css'; // Import the CSS styles

// function ImageSlideshow() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://xpand.onrender.com/api/content/6710f78b64b9de5448554a55', {
//       headers: {
//         'Authorization': 'Bearer e9b6c0207ecdd928383296944b2d8ce216a29d29b8c2f5b312de2520ecb8a198'
//       }
//     })
//       .then(response => {
//         console.log('API Response:', response.data);
//         const imageData = response.data; // Assuming the response data contains an array of image objects
//         setImages(imageData);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (isPaused) return;

//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, [isPaused, images.length]);

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="slideshow-container"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         images.map((image, index) => (
//           <img
//             key={image.id}
//             src={image.url}
//             alt={`Image ${index + 1}`}
//             className={index === currentIndex ? 'slideshow-image active' : 'slideshow-image'}
//           />
//         ))
//       )}
//       <button className="prev-button" onClick={handlePrevSlide}>
//         &#x25C0;
//       </button>
//       <button className="next-button" onClick={handleNextSlide}>
//         &#x25B6;
//       </button>
//     </div>
//   );
// }

// export default ImageSlideshow;


// this code tries to catch the errors 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// //import './ImageSlideshow.css'; // Import the CSS styles

// function ImageSlideshow() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://xpand.onrender.com/api/content/6710f78b64b9de5448554a55', {
//       headers: {
//         'Authorization': 'Bearer e9b6c0207ecdd928383296944b2d8ce216a29d29b8c2f5b312de2520ecb8a198'
//       }
//     })
//       .then(response => {
//         console.log('API Response:', response.data);
//         const imageData = response.data; // Assuming the response data contains an array of image objects
//         setImages(imageData);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (isPaused) return;

//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, [isPaused, images.length]);

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="slideshow-container"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         images.map((image, index) => (
//           <img
//             key={image.id}
//             src={image.url}
//             alt={`Image ${index + 1}`}
//             className={index === currentIndex ? 'slideshow-image active' : 'slideshow-image'}
//           />
//         ))
//       )}
//       <button className="prev-button" onClick={handlePrevSlide}>
//         &#x25C0;
//       </button>
//       <button className="next-button" onClick={handleNextSlide}>
//         &#x25B6;
//       </button>
//     </div>
//   );
// }

// export default ImageSlideshow;







// trying this one out 

// Fetch images from the backend API
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios

// const ImageSlideshow = () => {
//   // State to keep track of the images and the current slide
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   // Fetch images from the backend API
//   useEffect(() => {
//     const fetchImages = () => {
//       axios.get('https://xpand.onrender.com/api/content/6710f78b64b9de5448554a55', {
//         headers: {
//           'Authorization': 'Bearer e9b6c0207ecdd928383296944b2d8ce216a29d29b8c2f5b312de2520ecb8a198'
//         }
//       })
//       .then(response => {
//         // Handle the response data
//         console.log('API Response:', response.data); // Log the entire response

//         // Check if response.data.gallery is defined and is an array
//         if (response.data.gallery && Array.isArray(response.data.gallery)) {
//           setImages(response.data.gallery.map(item => item.url)); // Adjust according to your API response structure
//         } else {
//           console.error('Expected an array of pictures but got:', response.data.gallery);
//         }
//       })
//       .catch(error => {
//         // Handle any errors that occurred during the request
//         console.error('Error fetching images:', error);
//       });
//     };

//     fetchImages();
//   }, []);

//   // Effect to update the current slide every 4 seconds
//   useEffect(() => {
//     if (isPaused || images.length === 0) return;

//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, [isPaused, images.length]);

//   // Function to handle navigation to the previous slide
//   const handlePrevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
//   };

//   // Function to handle navigation to the next slide
//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//   };

//   return (
//     <div
//       className="slideshow-container"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {images.length > 0 ? (
//         <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slideshow-image" />
//       ) : (
//         <p>Loading images...</p> // Loading state
//       )}
//       <button className="prev-button" onClick={handlePrevSlide}>
//         &#x25C0;
//       </button>
//       <button className="next-button" onClick={handleNextSlide}>
//         &#x25B6;
//       </button>
//     </div>
//   );
// };

// export default ImageSlideshow;



/// last 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios

// const ImageSlideshow = () => {
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const fetchImages = () => {
//       axios.get('https://xpand.onrender.com/api/content/6710f78b64b9de5448554a55', {
//         headers: {
//           'Authorization': 'Bearer e9b6c0207ecdd928383296944b2d8ce216a29d29b8c2f5b312de2520ecb8a198'
//         }
//       })
//       .then(response => {
//         console.log('API Response:', response.data); // Log the entire response
//         if (response.data.gallery && Array.isArray(response.data.gallery)) {
//           const urls = response.data.gallery.map(item => item.url);
//           console.log('Image URLs:', urls); // Log the image URLs
//           setImages(urls);
//         } else {
//           console.error('Expected an array of pictures but got:', response.data.gallery);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching images:', error);
//       });
//     };

//     fetchImages();
//   }, []);

//   useEffect(() => {
//     if (isPaused || images.length === 0) return;

//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, [isPaused, images.length]);

//   const handlePrevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//   };

//   return (
//     <div
//       className="slideshow-container"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {images.length > 0 ? (
//         <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slideshow-image" />
//       ) : (
//         <p>Loading images...</p> // Loading state
//       )}
//       <button className="prev-button" onClick={handlePrevSlide}>
//         &#x25C0;
//       </button>
//       <button className="next-button" onClick={handleNextSlide}>
//         &#x25B6;
//       </button>
//     </div>
//   );
// };

// export default ImageSlideshow;

//another retry 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios

// const ImageSlideshow = () => {
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const fetchImages = () => {
//       axios.get('https://xpand.onrender.com/api/content/6710f78b64b9de5448554a55', {
//         headers: {
//           'Authorization': 'Bearer e9b6c0207ecdd928383296944b2d8ce216a29d29b8c2f5b312de2520ecb8a198'
//         }
//       })
//       .then(response => {
//         console.log('API Response:', response.data); // Log the entire response
//         if (response.data.gallery && Array.isArray(response.data.gallery)) {
//           const urls = response.data.gallery.map(item => item.url);
//           console.log('Image URLs:', urls); // Log the image URLs
//           setImages(urls);
//         } else {
//           console.error('Expected an array of pictures but got:', response.data.gallery);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching images:', error);
//       });
//     };

//     fetchImages();
//   }, []);

//   useEffect(() => {
//     if (isPaused || images.length === 0) return;

//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(intervalId);
//   }, [isPaused, images.length]);

//   const handlePrevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//   };

//   return (
//     <div
//       className="slideshow-container"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {images.length > 0 ? (
//         <img 
//           src={images[currentSlide]} 
//           alt={`Slide ${currentSlide + 1}`} 
//           className="slideshow-image" 
//           style={{ border: '2px solid red' }} // Temporary border for debugging
//         />
//       ) : (
//         <p>Loading images...</p> // Loading state
//       )}
//       <button className="prev-button" onClick={handlePrevSlide}>
//         &#x25C0; {/* Left arrow */}
//       </button>
//       <button className="next-button" onClick={handleNextSlide}>
//         &#x25B6; {/* Right arrow */}
//       </button>
//     </div>
//   );
// };

// export default ImageSlideshow;




import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for API requests

const ImageSlideshow = () => {
  // State variables
  const [images, setImages] = useState([]); // To store image URLs
  const [currentSlide, setCurrentSlide] = useState(0); // To track the current slide
  const [isPaused, setIsPaused] = useState(false); // To pause the slideshow

  // Fetch images from the API when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://xpand.onrender.com/api/content/6710f78b64b9de5448554a55', {
          headers: {
            'Authorization': 'Bearer e9b6c0207ecdd928383296944b2d8ce216a29d29b8c2f5b312de2520ecb8a198'
          }
        });
        console.log('API Response:', response.data); // Log the entire response
        if (response.data.gallery && Array.isArray(response.data.gallery)) {
          const urls = response.data.gallery.map(item => item.url); // Extract image URLs
          console.log('Image URLs:', urls); // Log the image URLs
          setImages(urls); // Update state with the URLs
        } else {
          console.error('Expected an array of pictures but got:', response.data.gallery);
        }
      } catch (error) {
        console.error('Error fetching images:', error); // Log any errors
      }
    };

    fetchImages(); // Call the function to fetch images
  }, []); // Empty dependency array means this runs once on mount

  // Handle slideshow interval
  useEffect(() => {
    if (isPaused || images.length === 0) return; // Don't run if paused or no images

    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length); // Cycle through images
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount or dependency change
  }, [isPaused, images.length]); // Dependencies to watch for changes

  // Navigate to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  // Navigate to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div
      className="slideshow-container"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
    >
      {images.length > 0 ? (
        <img 
          src={images[currentSlide]} 
          alt={`Slide ${currentSlide + 1}`} 
          className="slideshow-image" 
          style={{ border: '2px solid red' }} // Temporary border for debugging
        />
      ) : (
        <p>Loading images...</p> // Show loading message
      )}
      <button className="prev-button" onClick={handlePrevSlide}>
        &#x25C0; {/* Left arrow */}
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        &#x25B6; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ImageSlideshow; // Export the component