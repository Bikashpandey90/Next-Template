import { ArrowRight } from "lucide-react";
import Splash from '../../common/splash';


export default function index() {
    return <>
        <section className="py-16  px-4 md:px-16 grid md:grid-cols-2 sm:gap-16 gap-4 items-center mt-6">
            <div className="">
                <h2 className="text-3xl md:text-6xl font-inter font-semibold leading-tight mb-4 ">
                    Our brand is more than just clothing
                    <br></br>
                    <span>– it's a movement.</span>
                    <svg
                        width="100%"
                        height="60"
                        viewBox="-347 -30.1947 694 96.19"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-0"
                    >
                        <path
                            d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2"
                            stroke="#FFDDBF"
                            strokeWidth="20"
                            strokeLinecap="round"
                            fill="none"
                            pathLength="1"
                        />
                    </svg>
                </h2>

                <Splash className=" text-sm sm:text-lg rounded-xl sm:m-2 m sm:py-5 py-3 border before:bg-neutral-900 group flex items-center hover:text-white" >
                    Our Story
                    <span className="ml-2 inline-block">
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-45" />
                    </span>
                </Splash>
            </div>
            <div className="">
                <p className=" text-[1rem] sm:text-xl font-thin font-inter">
                    At Flowers & Saints, we believe in wearing your story with pride. Every product we design is crafted with
                    intention, combining style, quality, and purpose. Whether you're looking for a staple piece or something
                    that speaks to your unique journey, we've got you covered.
                </p>
                <div className="mt-8">
                    <h3 className=" text-[1rem] font-bold sm:text-xl mb-3">Explore Our Journey</h3>
                    <p className="text-[1rem] sm:text-xl">Discover the passion behind our designs and the community we're building together.</p>
                </div>
            </div>
        </section>
        </>
}