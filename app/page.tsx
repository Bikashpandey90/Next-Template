import HomeBanner from "@/components/home-banner";
import api from "@/lib/axios";
import { Metadata } from "next";

const getMetadata=()=>{
  const response=api.get('/')
  return{
    title:"Home",
    description:"This is the home page",
    authors:[],
    keywords:[],
    image:"",
    openGraph:{
      title:"Home",
      description:"This is the home page",
      type:"website",
      url:"",
      images:""
    }


  } as Metadata;
}


export default function Home() {
  return (

    <>
<HomeBanner/>



    </>
  );
}
