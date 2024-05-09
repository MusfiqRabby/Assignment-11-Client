import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';


const Slider = () => {
    return (

    <div className="my-7 mb-7" data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
       <Swiper 
      navigation={true}
      pagination={
        {clickable:true}
      }
       modules={[Navigation, Autoplay, Pagination]}
      loop={true}
      autoplay={{
        delay: 2000
      }} >
          <SwiperSlide>
          <div className="slide slide1 xl" >
            <div className="hero w-full bg-center bg-cover h-[38rem] min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/fpYLCCP/pens-glasses-books.jpg'}}>
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-poppins"> You have this assignment in front of you</h1>
                  <p className="mb-5 font-poppins opacity-90"> understanding of what the assignment entails, its purpose, and any specific requirements or expectations.<br />
                  </p>
                  <button className="btn btn-info text-white font-poppins"> Register Now </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

          <SwiperSlide>
          <div className="slide slide2 " >
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/JQ3k5zN/books-vase-vintage-camera-eyeglasses-pencil-holders-white-blank-paper-wooden-backdrop.jpg)' }}>
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-poppins">All the Best For Assignment</h1>
                  <p className="mb-5 font-poppins opacity-90"> Remember, its not just about the destination its about the journey. And with each assignment, we re one step closer to realizing our dreams and shaping a brighter future..<br />
                  </p>
                  <button className="btn btn-success text-white font-poppins">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

          <SwiperSlide>
          <div className="slide slide3 " >
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Z2hw8yp/bullet-journal-watch-top-view.jpg)' }}>

              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-poppins">Imagine for a moment that you are Hermione </h1>
                  <p className="mb-5 font-poppins opacity-90"> followed according to the specified style guide. The assignment will be assessed based on the depth of analysis, coherence of arguments, use of evidence, and clarity of expression..<br />
                  </p>
                  <button className="btn btn-error text-white font-poppins">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        </Swiper> 
        </div>
    );
};

export default Slider;