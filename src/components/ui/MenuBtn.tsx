export default function MenuBtn({className, onClick}:{className:string, onClick:() => void}) {
    return (
        <button 
        onClick={onClick}
        className={`bg-black flex items-center justify-center w-8 h-8 rounded-lg ${className}`}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24" 
        fill="none" stroke="#fff"
        strokeWidth="2" strokeLinecap="round" 
        strokeLinejoin="round"
        className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
        </button>
    )
}