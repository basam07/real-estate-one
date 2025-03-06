import Link from "next/link";



export default function HomeSecSix(){
    return (
        <div className="home-section-six flex flex-col items-center my-24">
            <h3 className="text-center md:text-[32px] sm:text-[28px] xs:text-[24px] font-bold">Ready to Invest in a Class of Your Own?</h3>
            <p className="text-center text-lg mt-5">Experience the epitome of luxury real estate investment with Realinvte.</p>

            <div className='mt-5 flex gap-5'>
                <Link href={'./listings'} className="cta_link  sm:w-[200px] xs:w-full flex justify-center">Explore Investments</Link>
                <Link href={'./contact'} className="cta_link sm:w-[200px] xs:w-full flex justify-center">Contact Us</Link>
            </div>

        </div>
    )
}