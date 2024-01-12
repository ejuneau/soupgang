export default function Hamburger(props) {
    return(
        <>
        <div className="hamburger">
            <div className="burger burger1" />
            <div className="burger burger2" />
            <div className="burger burger3" />
        </div>

        <style>{`
            .hamburger{
                width:2rem;
                height: 2rem;
                display: flex;
                justify-content: space-around;
                flex-flow: column nowrap;
                z-index: 10;
                display: none;
            }
            .burger {
                width: 2rem;
                height: 0.25rem;
                border-radius: 10px;
                background-color: white;
                transform-origin: 1px;
                transition: all 0.2s ease-in-out;
            }
            @media (max-width: 767px) {
                .hamburger{
                    display: flex;
                }
                #logo {
                    height: 50%;
                }
                header a {
                    height: unset;
                    margin: 1rem;
                    padding: 1rem;
                }
                h1.splash-text {
                    margin: 0;
                }
                .text-CTA {
                    max-width: unset;
                }
                .steps, .about-info p, .pricing > * {
                    width: unset;
                    max-width: unset;
                }
                table {
                    font-size: 0.85rem;
                }
                .slideshow {
                    width: 100%;
                }
                .slideshow-slide {
                    width: 40%;
                    height: 40%;
                }
                .slideshow-image {
                    height: 170px;
                }
                header nav {
                    display: flex;
                    visibility: ${props.hamburgerOpen? 'visible' : 'hidden'};
                    opacity: ${props.hamburgerOpen? '1' : '0'};
                    background-color: #242F40;;
                    top: 0;
                    height: 100vh;
                    width: 110vw;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    flex-direction: column;
                    z-index: 10;
                    transition: visibility 0.3s, opacity 0.3s linear;
                }
                header nav li {
                    list-style: none;
                    font-size: 1.3rem;
                    padding: 1rem;
                }
                .burger1{
                    transform: ${props.hamburgerOpen? 'rotate(45deg)' : 'rotate(0deg)'}
                }
                .burger2{
                    transform: ${props.hamburgerOpen? 'translateX(10%)' : 'translateX(0%)'};
                    opacity: ${props.hamburgerOpen? '0' : '1'};
                    transition: transform 0.1s ease-in-out, opacity 0.2s ease-in-out;
                }
                .burger3{
                    transform: ${props.hamburgerOpen? 'rotate(-45deg)' : 'rotate(0deg)'}
                }
                html {
                    height: ${props.hamburgerOpen? '100vh':'auto'};
                    overflow: ${props.hamburgerOpen? 'hidden':'auto'};
                }
            }
        `}
        </style>
        </>
    )
}