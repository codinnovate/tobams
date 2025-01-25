import { Blog, Footer, Header, Hero, NewsLetter } from "@/components";
export default function HomPage({searchParams}: {searchParams: {query?: string}}) {
  const query = searchParams.query;

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