import { logo } from "@/assets";
import Image from "next/image";

export default function Logo(){
    return (
        <Image 
         src={logo}
         alt="tobams group logo" 
         className="h-[42px] object-contain w-[123.85px] md:w-[165.71px] md:h-[64px]"

         />
    )
}