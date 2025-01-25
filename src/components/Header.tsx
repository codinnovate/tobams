import { navItems } from "@/constants";
import Link from "next/link";
import Logo from "./Logo";
import MenuBtn from "./ui/MenuBtn";
import Button from "./ui/Button";

export default function Header (){
    return (
        <header className="flex flex-col">
            <div className="flex items-center p-2 justify-between border-b-[#DDD0DA] border">
                <Logo />
                <MenuBtn  className='md:hidden'/>
                <div className="hidden md:flex items-center  gap-3">
                    <Button 
                    icon={
                    <div className="" />
                    } 
                    title='Account' bg='bg-primary'/>
                    <Button 
                    title='Account'  
                    bg='bg-secondary' />
                </div>
            </div>
            <nav className="hidden md:flex max-w-6xl mx-auto gap-8 h-[69px] justify-center items-center">
             {navItems.map((item, idx) => (
                 <Link 
                 href={item.label} 
                 className="text-[#151515] font-normal text-lg hover:text-primary"
                 key={idx}>
                    {item.label}
                 </Link>
             ))}
            </nav>
        </header>
    )
}