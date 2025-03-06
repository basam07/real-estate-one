import Image from "next/image";
import Logo from "../../../../public/logo.png";
import fbLogo from "../../../../public/socials/fb.png";
import igLogo from "../../../../public/socials/insta.png";
import twLogo from "../../../../public/socials/twitter.png";
import linkdlenLogo from "../../../../public/socials/linkdeln.png";


export default function Left() {
    return <div className='sm:ml-auto m-auto'>
        <Image src={Logo} alt="logo" width={150}/>
        <div className='flex flex-col'>
            <div className='mt-3'>Phone: +494-653-7796</div>
            <div className='mt-3'>Email: Leo.Beatty@yahoo.com</div>
            <div className='mt-3'>Address: 8502 Preston Rd. <br/> Inglewood, Maine 98380</div>

            <div className='flex flex-row gap-2 mt-3'>
                <Image src={fbLogo} alt="fbLogo" width={20}/>
                <Image src={igLogo} alt="igLogo" width={20}/>
                <Image src={twLogo} alt="twLogo" width={20}/>
                <Image src={linkdlenLogo} alt="linkdlenLogo" width={20}/>
            </div>
        </div>
    </div>
}