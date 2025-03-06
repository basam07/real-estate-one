import Image from "next/image";
import teamImg from "../../../public/team-img.png";
import Link from "next/link";

export default function TeamServiceCard({data ,  href}){

    return <div className="max-w-[330px] mx-auto text-center my-20 sm:my-10 xs:my-5">
        <h3 className='text-[28px] md:text-[36px] sm:text-[28px] my-2'>{data.title}</h3>
        <div className="team-service-card__img">
            <Image src={teamImg} alt="team image" />
        </div>
        <div className="my-3">
            <p>{data.desc}</p>
        </div>
        <Link href={href} className="w-[330px] cta_link">{data.button_text}</Link>
    </div>
}