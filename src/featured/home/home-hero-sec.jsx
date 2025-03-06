import Link from "next/link";
import { fetchTaglines } from "../../../server/home-title/taglines";

const HomeHeroSec = async () => {
    const taglines = await getTagline();

    return (
        <div className={'home-hero-sec'}>
            {taglines.length > 0 ? (
                taglines.map((item) => (
                    <div key={item.id}>
                        <div className={'hero-title'}>{item.tagline || "Elevate Your Investment Experience"}</div>
                        <br />
                        <p className='hero-sub-title'>{item.subTagline || "Discover Curated Luxury Properties and Exceptional Investment Opportunities"}</p>
                    </div>
                ))
            ) : (
                <div>
                    <div className={'hero-title'}>Elevate Your Investment Experience</div>
                    <br />
                    <p className='hero-sub-title'>Discover Curated Luxury Properties and Exceptional Investment Opportunities</p>
                </div>
            )}
            <Link href={'./listings'} className={'cta_link'}>Exclusive Investment</Link>
        </div>
    );
}

export default HomeHeroSec;

async function getTagline() {
    return fetchTaglines();
}