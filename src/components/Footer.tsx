import Contact from "./Contact";
import Logo from "./Logo";

export default function Footer(){
    return (
        <section className="bg-[#11040E] text-white">
        <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col md:grid md:grid-cols-4 md:justify-between">
        <div className="">
         <Logo />
         <p>Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
         <div className=''>
            social
        </div>
        </div>
        <div className="">
            What we Do
        </div>
        <div className="">
            Company
        </div>
        <div className="">
            Solution
        </div>
         </div>
         <Contact />
         {/* <Copyright /> */}
            </div>
        </section>
    )
}