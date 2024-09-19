import BlogImg from "../../assets/images/blog.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Keyboard, Pagination, Navigation } from "swiper/modules";
import Ellipse from "../../assets/svg/Ellipse.svg";
import TestamonalCard from "../../components/commen/TestamonialCard/TestamonalCard";
const TestomonialSection = () => {
  return (
    <section className="py-8 relative h-screen">
    <div className="absolute -left-24 top-[20%] ">
      <img src={Ellipse} alt="Ellips" />
    </div>
    <div className="flex justify-center items-center flex-col gap-4 my-10 relative top-32">
      <h5 className="text-6xl font-semibold text-green-950 text-center">
        The User Quotes About Us{" "}
      </h5>
    </div>
    <div className="flex items-center h-full">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Keyboard, Pagination, Navigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestamonalCard
            name={"Cristina García"}
            designation={"Designer"}
            comment={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. "
            }
            img={BlogImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestamonalCard
            name={"Cristina García"}
            designation={"Designer"}
            comment={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. "
            }
            img={BlogImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestamonalCard
            name={"Cristina García"}
            designation={"Designer"}
            comment={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. "
            }
            img={BlogImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestamonalCard
            name={"Cristina García"}
            designation={"Designer"}
            comment={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. "
            }
            img={BlogImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestamonalCard
            name={"Cristina García"}
            designation={"Designer"}
            comment={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. "
            }
            img={BlogImg}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestamonalCard
            name={"Cristina García"}
            designation={"Designer"}
            comment={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. "
            }
            img={BlogImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestamonalCard
            name={"Cristina García"}
            designation={"Designer"}
            comment={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod. "
            }
            img={BlogImg}
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div className="absolute -right-24 top-[20%] rotate-180">
      <img src={Ellipse} alt="Ellips" />
    </div>
  </section>
  )
}

export default TestomonialSection