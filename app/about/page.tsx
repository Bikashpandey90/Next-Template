
import AboutUsComponent from "@/components/about-us";

//default =>server side rendering
//client side rendering => import dynamic from 'next/dynamic'
const AboutUs=()=>{
    return(<> 
   <AboutUsComponent/>
    </>)

}
export default AboutUs;
