import HomeSecSix from "@/featured/home/home-section-six";
import ServicesHeroSec from "@/featured/services/services-hero-sec";
import ServicesSecTwo from "@/featured/services/services-sec-two";
import ServicesSecThree from "@/featured/services/services-sec-three";


export default function page() {
    return (
        <div>
            <ServicesHeroSec />
            <ServicesSecTwo />
            <ServicesSecThree/>
            <HomeSecSix />
        </div>
    )
}