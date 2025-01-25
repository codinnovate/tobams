import Image from "next/image";
import Link from "next/link";

export default function BlogCard(){
    return (
        <Link href="/" className="flex flex-col max-w-[327px] w-full md:max-w-[424px] ">
        <div className="relative">
            <Image src={image} />
            <span className="absolute top-0 left-0">
                {category}
            </span>
        </div>
        
        </Link>
    )
}