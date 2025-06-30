"use client";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Image from "next/image";

export interface UserData{
  
    _id:string,
    name:string,
    email:string,
    status:"active"|"inactive"

  
}
export interface BannerData{
  createdAt:Date;
  createdBy:UserData;
  endDate:Date;
  image:string;
  link:string;
  startDate:Date;
  status:"active"|"inactive";
  title:string;
  updatedAt:Date;
  updatedBy:null |UserData;
  _v:number;
  _id:string
}

const HomeBanner=()=>{
const [banner,setBanner]=useState<Array<BannerData>>([]);
const loadBannerData=async()=>{
  try{
    const response=await api.get('/banner/home-banner')

    setBanner(response.data.detail)
     

  }catch(exception){
    console.log(exception)
  }
}
useEffect(()=>{
  loadBannerData()
},[])

    return(<>
    
<Swiper
  spaceBetween={50}
  slidesPerView={1}
>    
  {
    banner && banner.map((bannerData:BannerData,index:number)=>(
      <SwiperSlide key={index}>
        <Image src={bannerData.image} width={2000} height={400} alt={bannerData.title} className="rounded-sm"/>
      </SwiperSlide>

    ))
  }
...
</Swiper>
    </>)
}
export default HomeBanner