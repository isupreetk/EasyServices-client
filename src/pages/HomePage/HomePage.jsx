import "./HomePage.scss";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import ServicesList from "../../components/ServicesList/ServicesList";

function HomePage() {
    return (
        <>
        <h1>Home Page</h1>
        <div>
            <HeroCarousel />
        </div>
        <div className="homePage__searchbar-container">
            <label className="homePage__searchbar-label" htmlFor="locationSearch">Search Based on Location</label>
            <input className="homePage__searchbar-input" type="text" name="locationSearch" placeholder="Search based on your location" >
            </input>
        </div>
        <div>
            <ServicesList />
        </div>
        
        </>
    );
}

export default HomePage;