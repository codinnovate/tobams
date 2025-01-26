import Button from "./ui/Button";

export default function NewsLetter(){
    return (
        <section className="max-w-5xl mx-auto w-full h-[273px] md:h-[281px] gap-[14px] my-[50px] md:gap-[20px] md:justify-center md:p-[64px] bg-primary/10  rounded-[8px] p-8 flex flex-col">
         <h1 className="text-[#151515] font-bold text-base md:text-2xl ">Sign Up for Our Newsletter</h1>
         <h3 className="text-[#151515] md:text-xl">Subscribe to receive our latest company updates</h3>
         <div className="flex flex-col md:flex-row  gap-5">
            <input 
            type="text" 
            className="w-full px-3 rounded-[8px]" 
            placeholder="Enter your Email"
            />
            <Button
             title="Subscribe"
             bg="bg-primary"
            
            />

         </div>
        </section>
    )
}