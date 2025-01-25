export default function Hero(){
    return (
        <section className="flex justify-center items-center bg-[url('/blog.jpeg')] bg-contain h-[500px] relative">
            <div  className="bg-black opacity-70 absolute top-0 left-0 bottom-0 right-0"/>
            <div className="max-w-5xl z-40 mx-auto flex flex-col gap-4 p-5">
                <h1 className="font-bold  text-white text-center text-[20px] md:text-[48px] leading-[25px] md:leading-[61px]">
                Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest Industry Insights
                </h1>
                <h3 className="text-center text-white leading-[27px] font-normal md:font-semibold text-lg">Insights that inspire success: uncover a wealth of knowledge by staying updated</h3>
            </div>
        
        </section>
    )
}