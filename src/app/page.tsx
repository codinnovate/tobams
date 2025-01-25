import { Blog, Footer, Hero, NewsLetter } from "@/components";
export default async function HomPage({searchParams}:{searchParams:Promise<{query?:string}>}){

    const query = (await searchParams).query ;
  return (
    <main className="flex flex-col">
      <Hero />
      <Blog  
      query={query}/>
      <NewsLetter />
      <Footer />
    </main>
  )
}