import ProgressiveImage from 'react-progressive-graceful-image';

import BeefBaconStew        from '../assets/food/fullres/beef and bacon stew.png';
import BeefBaconStewPH      from '../assets/food/lowres/beef and bacon stew.png';

import BeefBoneCurry        from '../assets/food/fullres/beef bone curry.png';
import BeefBoneCurryPH      from '../assets/food/lowres/beef bone curry.png';

import BeefWellington       from '../assets/food/fullres/beef wellington.png';
import BeefWellingtonPH     from '../assets/food/lowres/beef wellington.png';

import Borscht              from '../assets/food/fullres/borscht.png';
import BorschtPH            from '../assets/food/lowres/borscht.png';

import ChickenNoodleSoup    from '../assets/food/fullres/chicken noodle soup.png';
import ChickenNoodleSoupPH  from '../assets/food/lowres/chicken noodle soup.png';

import ChickenPadThai       from '../assets/food/fullres/chicken pad thai.png';
import ChickenPadThaiPH     from '../assets/food/lowres/chicken pad thai.png';

import ChickenPotPie        from '../assets/food/fullres/chicken pot pie.png';
import ChickenPotPiePH      from '../assets/food/lowres/chicken pot pie.png';

import ChiliConCarne        from '../assets/food/fullres/chili.png';
import ChiliConCarnePH      from '../assets/food/lowres/chili.png';

import FrenchFries          from '../assets/food/fullres/french fries.png';
import FrenchFriesPH        from '../assets/food/lowres/french fries.png';

import LambShepherdsPie     from "../assets/food/lamb shepherd's pie.png";
import LambShepherdsPiePH   from "../assets/food/lowres/lamb shepherd's pie.png";

import PolishDonuts         from '../assets/food/fullres/polish donuts.png';
import PolishDonutsPH       from '../assets/food/lowres/polish donuts.png';

import RiceAndChickenStew   from '../assets/food/fullres/rice and chicken stew.png';
import RiceAndChickenStewPH from '../assets/food/lowres/rice and chicken stew.png';

import RoastDuck            from '../assets/food/fullres/roast duck.png';
import RoastDuckPH          from '../assets/food/lowres/roast duck.png';

import ShrimpFriedRice      from '../assets/food/fullres/shrimp fried rice.png';
import ShrimpFriedRicePH    from '../assets/food/lowres/shrimp fried rice.png';

import ShrimpSalad          from '../assets/food/fullres/shrimp salad.png';
import ShrimpSaladPH        from '../assets/food/lowres/shrimp salad.png';

import VeganCaesarSalad     from '../assets/food/fullres/vegan ceasar salad.png';
import VeganCaesarSaladPH   from '../assets/food/lowres/vegan ceasar salad.png';

import { Link } from 'react-router-dom';

export default function Slideshow(props) {
    const images = [
        {
            name:   "Beef and Bacon Stew",
            img:    BeefBaconStew,
            ph:     BeefBaconStewPH,
            cook:   "Alex (Montréal, QC)",
        },
        {
            name:   "Rice and Chicken Stew",
            img:    RiceAndChickenStew,
            ph:     RiceAndChickenStewPH,
            cook:   "Tristan (Portland, OR)",
        },
        {
            name:   "Borscht",
            img:    Borscht,
            ph:     BorschtPH,
            cook:   "Remy (Paris, FR)",
        },
        {
            name:   "Chili con Carne",
            img:    ChiliConCarne,
            ph:     ChiliConCarnePH,
            cook:   "Monica (Manhattan, NY)",
        },
        {
            name:   "Chicken Noodle Soup",
            img:    ChickenNoodleSoup,
            ph:     ChickenNoodleSoupPH,
            cook:   "Makoto (Tokyo, JP)",
        },
        {
            name:   "Lamb Shepherd's Pie",
            img:    LambShepherdsPie,
            ph:     LambShepherdsPiePH,
            cook:   "Bob (Seymour's Bay, NJ)",
        },
        {
            name:   "Chicken Pad Thai",
            img:    ChickenPadThai,
            ph:     ChickenPadThaiPH,
            cook:   "Chell (Bolarus IX)",
        },
        {
            name:   "Beef Wellington",
            img:    BeefWellington,
            ph:     BeefWellingtonPH,
            cook:   "Eve (Montréal, QC)",
        },
        {
            name:   "Shrimp Fried Rice",
            img:    ShrimpFriedRice,
            ph:     ShrimpFriedRicePH,
            cook:   "Ethel (Riverdale, NY)",
        },
        {
            name:   "Chicken Pot Pie",
            img:    ChickenPotPie,
            ph:     ChickenPotPiePH,
            cook:   "Shan (Wellington, NZ)",
        },
        {
            name:   "Shrimp Salad",
            img:    ShrimpSalad,
            ph:     ShrimpSaladPH,
            cook:   "Marshall (San Francisco, CA)",
        },
        {
            name:   "French Fries",
            img:    FrenchFries,
            ph:     FrenchFriesPH,
            cook:   "'Chef' (Stockholm, SE)",
        },
        {
            name:   "Roast Duck",
            img:    RoastDuck,
            ph:     RoastDuckPH,
            cook:   "Jack (Santa Monica, CA)",
        },
        {
            name:   "Polish Donuts",
            img:    PolishDonuts,
            ph:     PolishDonutsPH,
            cook:   "Arthur (North Caldwell, NJ)",
        },
        {
            name:   "Vegan Caesar Salad",
            img:    VeganCaesarSalad,
            ph:     VeganCaesarSaladPH,
            cook:   "Sydnee (Montréal, QC)",
        },
        {
            name:   "Beef Bone Curry",
            img:    BeefBoneCurry,
            ph:     BeefBoneCurryPH,
            cook:   "Carmen (Chicago, IL)",
        },

    ]
    
    var randomizedImages = [];

    while (randomizedImages.length < images.length) {
        var r = Math.floor(Math.random() * images.length);
        if (randomizedImages.indexOf(images[r]) === -1) {
            randomizedImages.push(images[r])
        }
    }

    const imagesList = props.truncated?randomizedImages.slice(0,6):randomizedImages;

    return (
        <div className="slideshow-container">
            {props.truncated && <h1>What's cooking?</h1>}
            <div className="slideshow">
                {
                    imagesList.map(image => {
                        return (
                            <div className="slideshow-slide" key={image.name}>
                                {/* <ProgressiveImage src={image.img} placeholder={image.ph}>
                                    {(src, loading) => (
                                        <img
                                        className={`slideshow-image${loading ? " loading" : " loaded"}`}
                                        src={src}
                                        alt={image.name}
                                        />
                                    )}
                                    </ProgressiveImage> */}

                                    <ProgressiveImage src={image.img} placeholder={image.ph} >
                                        {(src, loading) => <img src={src} className={`slideshow-image ${loading?"loading":"loaded"}`} draggable="false" alt={image.name} />}
                                    </ProgressiveImage>
                                <h3 className="slideshow-text image-text">{image.name}<br/>By: {image.cook}</h3>
                            </div>
                        )
                    })
                }
                
            </div>
            {props.truncated && <Link to="/menus/" className="button">Show Me more</Link>}
        </div>
    )
}

