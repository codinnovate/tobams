import { Blog, Footer, Header, Hero, NewsLetter } from "@/components";
export default function HomPage(){
  return (
    <main className="flex flex-col gap-[56px]">
      <Header />
      <Hero />
      <Blog />
      <NewsLetter />
      <Footer />
    </main>
  )
}