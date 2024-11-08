import HeroSection from "./sections/Hero";
import Showroom from "./sections/Showroom";

const HomePage = () => {
    return (
        <div className="container mx-auto my-8">
            <HeroSection />
            <hr className="my-4" />
            <Showroom />
        </div>
    );
}

export default HomePage;
