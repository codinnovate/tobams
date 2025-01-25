interface IButtonProps {
    icon?: React.ReactNode,
    title: string;
    bg: string;
}

export default function Button({icon, bg, title}:IButtonProps){
    return  (
        <button className={`flex text-white items-center  justify-center w-[167px] h-[48px] ${bg} rounded-[4px] hover:bg-opacity-90 duration-500`}> 
            {icon &&
             icon
            }
            {title}
        </button>
    )
}