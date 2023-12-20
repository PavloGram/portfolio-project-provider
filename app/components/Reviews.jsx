'use client'

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Carousel } from "react-responsive-carousel";
import { comments } from "../lib/comments";

function Reviews() {
  // const [people, setPeople] = useState(comments);
  // const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section className="relative">
        
        <div className=" absolute top-0 left-0 w-full h-full z-40"></div>
        <div className="max-w-[500px] px-5 mx-auto">
        <Carousel
          set
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          emulateTouch={false}
          interval={5000}
        >
          {comments.map((el, i) => {
            return (
              <div
                key={el.id}
                className="opacity-100  p-5  border-2 boreder-[#079fd1] rounded-xl my-5 pr-10"
              >
               
                  <h2 className="text-[24px] font-bold mb-2 text-center">
                    {el.name}
                  </h2>
               
               

                <p className="text-left text-[14px]">{el.text}</p>
              </div>
            );
          })}
        </Carousel>  
        </div>
        
        {/* <div className=" max-w-[500px] px-10 mx-auto  bg-red-500">
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} 
          showIndicators={false} showStatus={false} showArrows={false}
          >
            {comments.map((el, i) => {
              return (
                <div
                  key={el.id}
                  className="opacity-100 max-w-[500px] mx-auto py-10  flex items-center border-2 boreder-[#079fd1] rounded-xl my-5 pr-10"
                >
                  <div>
                    <h2 className="text-[24px] font-bold mb-2 text-center">
                      {el.name}
                    </h2>
                    <div className="w-[180px] flex justify-center items-center">
                      <Image src={comImg} alt="icon" width={120} height={160} />
                    </div>
                  </div>

                  <p className="">{el.text}</p>
                </div>
              );
            })}
          </Carousel>
        </div> */}
      </section>
    </>
  );
}

export default Reviews;
