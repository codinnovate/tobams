import { PostType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({post}:{post:PostType}){
    return (
        <div className="flex flex-col gap-6 my-[2em] max-w-[327px] w-full md:max-w-[424px] rounded-t-[8px] ">
        <div className="relative">
            <div className="opacity-25 bg-black absolute top-0 bottom-0 right-0 left-0" />
            <Image 
            src={post.cover_image || post.social_image}  
            alt='' 
            width={327}
            height={300}
            className="w-full h-[300px] object-cover rounded-t-[8px]"
            />
            <span className="absolute top-[20px] left-[20px] w-fit min-w-[90px] items-center text-center justify-center bg-white/50 text-primary capitalize font-semibold text-base rounded-[3px] p-1.5">
                {post.tag_list[0]}
            </span>
        </div>
        <h1 className="text-[#151515] h-[60px] font-semibold text-xl">{post.title}</h1>
        <div className="h-[101px] flex flex-col justify-between">
        <h3 className="text-[#696969] text-lg font-normal">{post.description.slice(0, 130)}</h3>
        <div className="flex items-center justify-between">
            <p className="text-[#696969] text-lg font-normal">{post.readable_publish_date} |  3 mins read</p>
            <Link 
            href={`/blog/${post.id}`}
            className="text-primary decoration-primary "
            >
            View Post
            </Link>
        </div>
        </div>
        
        </div>
    )
}