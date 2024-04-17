import "./App.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Container from '@mui/material/Container';
import Stats from './stats';
import me from "./assets/me.jpg";
import me_2 from "./assets/me_2.jpg";
import me_3 from "./assets/me_3.jpg";
import me_4 from "./assets/me_4.jpg";
import me_5 from "./assets/me_5.jpeg";
import me_6 from "./assets/me_6.jpeg";
import me_7 from "./assets/me_7.jpeg";



export default function App() {
  const images = [
    {
      original: me_3,
      thumbnail: me_3
    },
    {
      original: me_2,
      thumbnail: me_2,
    },
    {
      original: me,
      thumbnail: me,
    },
    {
      original: me_4,
      thumbnail: me_4,
    },
    {
      original: me_5,
      thumbnail: me_5,
    },
    {
      original: me_6,
      thumbnail: me_6,
    },
    {
      original: me_7,
      thumbnail: me_7,
    },
  ];

  return (
    
    <div className="App">
     
        
        {/* <h2 className="subtitle">Subtitle</h2> */}
      <nav> 
        <div className="header">
          <h1 className="title">05.21.23</h1>
          <h1>Issue #808</h1>
          </div>
        
      </nav>

      <div className="header_2">
        <h1>demarose</h1>
        <ul className="navigation">
          <li><a href="https://www.marcdrose.com" className="link">Home</a></li>
          <li><a href="#" className="link">Shop</a></li>
          <li><a href="#" className="link">Music</a></li>
          <li><a href="#" className="link">Contact</a></li>
        </ul>

      </div>
      <Container className="header_3" maxWidth="xlg">
        <h1>MODE</h1>
        <h3>Prêt-à-Porter</h3>
      </Container>
     

      <img id="barcode" src="https://barcode-list.com/barcodeImage.php?barcode=4807770270055" alt="mock barcode" />

      

      
      
      <div className="gallery">
      <div className="contents">
        <h1>The Hottest Summer Trends</h1>
        <h4>- Pg. 72 Lose That Winter Weight</h4>
        <h4>- Pg. 107 &ldquo;Supernova&rdquo; Fashions</h4>
        <h4>- Pg. 135 Gigi Hadid in Rare Form</h4>
        <Stats />
  
      </div>
      <div className="highlights">
        <h1>Marc Rose</h1>
        <h4>Model, Mogul, Musician</h4>
        <h4>His Incredible Breakout Year</h4>
        <br />
        <h1>Anok Yai</h1>
        <h4>Met Gala Megastar</h4>
      </div>
        <ImageGallery
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          slideInterval={8000}
          slideOnThumbnailOver={true}
          showIndex={false}
          onPlay={() => {
            alert("slideshow is now playing!");
          }}
        />
      </div>
    </div>
    
  );
  
}
