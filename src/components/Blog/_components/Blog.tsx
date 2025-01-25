import { getPosts } from "@/actions";
import BlogCard from "./BlogCard";
import Searchbar from "./Searchbar";

export default  async function Blog({query}:{query?:string}){
    const posts = await getPosts();
    return (
        <section className="flex flex-col py-[32px] px-[24px] max-w-7xl mx-auto w-full mt-[56px] gap-8 md:gap-[60px]">
            <h1 className="text-primary text-center font-semibold text-xl md:text-[40px] md:leading-[52px]   ">
            Stay Updated with the Latest trends in Tobams Group
            </h1>
            <Searchbar  query={query} />
            <ul className="grid grid-cols-3 gap-6 md:gap-[20px] ">
                {posts?.length > 0 ?(
                    posts.map((post, idx:number) => (
                        <BlogCard
                         post={post}
                         key={idx}
                    />
                        
                    ))
                ): (
                    <p>No Blog Post(s) Found!</p>
                )}
            </ul>
            {/* <BlogCards /> */}
        
        </section>
    )
}