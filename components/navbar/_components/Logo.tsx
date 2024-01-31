
import Image from "next/image";
import Link from "next/link";
import "/public/logos/marshielo-logo.png";
const Logo = () => {
    return (
        <>
            <Link href='/'>
                <Image
                    src="/logos/marshielo-logo.png"
                    alt="Logo"
                    width={200}
                    height={50}
                />
                
            </Link>
            
        </>
    );
}
 
export default Logo;