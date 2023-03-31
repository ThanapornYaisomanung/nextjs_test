import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}){
    return(
        <>
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
        
        </>
    )
}

/*

<Navbar/>
เรียกใช้ข้อมูลมาแสดงในเว็บไซต์
{children}
<Footer/>

*/