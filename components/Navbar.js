import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    return(
        <>
        <nav>
            <div>
                <Image src="/channels4_profile.jpg" width={50} height={50}/>
                <h1>Test</h1>
            </div>
            <Link href="/">หน้าแรก</Link> | 
            <Link href="/about">เกี่ยวกับ</Link>
            
        </nav>
        </>
        
    )
}

//<Link href="/products">เมนูทั้งหมด</Link>