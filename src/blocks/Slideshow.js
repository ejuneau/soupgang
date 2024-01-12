import BeefBaconStew        from '../assets/food/beef and bacon stew.png';
import BeefBoneCurry        from '../assets/food/beef bone curry.png';
import BeefWellington       from '../assets/food/beef wellington.png';
import Borscht              from '../assets/food/borscht.png';
import ChickenNoodleSoup    from '../assets/food/chicken noodle soup.png';
import ChickenPadThai       from '../assets/food/chicken pad thai.png';
import ChickenPotPie        from '../assets/food/chicken pot pie.png';
import ChiliConCarne        from '../assets/food/chili.png';
import FrenchFries          from '../assets/food/french fries.png';
import LambShepherdsPie     from "../assets/food/lamb shepherd's pie.png";
import PolishDonuts         from '../assets/food/polish donuts.png';
import RiceAndChickenStew   from '../assets/food/rice and chicken stew.png';
import RoastDuck            from '../assets/food/roast duck.png';
import ShrimpFriedRice      from '../assets/food/shrimp fried rice.png';
import ShrimpSalad          from '../assets/food/shrimp salad.png';
import VeganCaesarSalad     from '../assets/food/vegan ceasar salad.png';

import { Link } from 'react-router-dom';

export default function Slideshow(props) {
    const images = [
        {
            name:   "Beef and Bacon Stew",
            img:    BeefBaconStew,
            cook:   "Alex (Montréal, QC)"
        },
        {
            name:   "Rice and Chicken Stew",
            img:    RiceAndChickenStew,
            cook:   "Tristan (Portland, OR)"
        },
        {
            name:   "Borscht",
            img:    Borscht,
            cook:   "Remy (Paris, FR)"
        },
        {
            name:   "Chili con Carne",
            img:    ChiliConCarne,
            cook:   "Monica (Manhattan, NY)"
        },
        {
            name:   "Chicken Noodle Soup",
            img:    ChickenNoodleSoup,
            cook:   "Makoto (Tokyo, JP)"
        },
        {
            name:   "Lamb Shepherd's Pie",
            img:    LambShepherdsPie,
            cook:   "Bob (Seymour's Bay, NJ)"
        },
        {
            name:   "Chicken Pad Thai",
            img:    ChickenPadThai,
            cook:   "Chell (Bolarus IX)"
        },
        {
            name:   "Beef Wellington",
            img:    BeefWellington,
            cook:   "Eve (Montréal, QC)"
        },
        {
            name:   "Shrimp Fried Rice",
            img:    ShrimpFriedRice,
            cook:   "Ethel (Riverdale, NY)"
        },
        {
            name:   "Chicken Pot Pie",
            img:    ChickenPotPie,
            cook:   "Shan (Wellington, NZ)"
        },
        {
            name:   "Shrimp Salad",
            img:    ShrimpSalad,
            cook:   "Marshall (San Francisco, CA)"
        },
        {
            name:   "French Fries",
            img:    FrenchFries,
            cook:   "'Chef' (Stockholm, SE)"
        },
        {
            name:   "Roast Duck",
            img:    RoastDuck,
            cook:   "Jack (Santa Monica, CA)"
        },
        {
            name:   "Polish Donuts",
            img:    PolishDonuts,
            cook:   "Arthur (North Caldwell, NJ)"
        },
        {
            name:   "Vegan Caesar Salad",
            img:    VeganCaesarSalad,
            cook:   "Sydnee (Montréal, QC)"
        },
        {
            name:   "Beef Bone Curry",
            img:    BeefBoneCurry,
            cook:   "Carmen (Chicago, IL)"
        },

    ]
    const imagesList = props.truncated?images.slice(0,6):images;
    return (
        <div className="slideshow-container">
            {props.truncated && <h1>What's cooking?</h1>}
            <div className="slideshow">
                {
                    imagesList.map(image => {
                        return (
                            <div className="slideshow-slide" key={image.name}>
                                <img className="slideshow-image" src={image.img} alt={image.name} />
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

