import { getPostDetails } from "@/actions"
import Image from "next/image"

export default async function BlogDetailPage({
    params,
  }: {
    params: Promise<{ slug: number }>
  }) {
    const slug = (await params).slug
    const post = await getPostDetails(slug)


    return (
    <div className="max-w-7xl mx-auto p-6  md:mt-[56px] mt-8 gap-[20px] flex justify-center flex-col">
         <span className=" w-fit min-w-[90px] items-center text-center justify-center bg-[#15151533] text-primary capitalize font-semibold text-base rounded-[3px] p-1.5">
                {post.tags[0]}
        </span>
        <h1 className="text-xl font-bold md:text-[42px] md:leading-[67.2px]    ">
            {post.title}
        </h1>
        <p className="text-[#696969] text-lg font-normal">{post.readable_publish_date} |  3 mins read</p>
         <Image 
         src={post.cover_image || post.social_image} 
         alt={post.title}
         width={1000}
         height={600}
         className="object-cover rounded-[12px]  w-full "
         />
            {/* for descriptions */}
            <div
             className="w-full max-w-6xl overflow-hidden mx-auto font-normal text-base text-[#151515] flex flex-col gap-2"
              dangerouslySetInnerHTML={{
                __html: post.body_html, // Render raw HTML from API
              }}
            />
    
        
    </div>

  )}