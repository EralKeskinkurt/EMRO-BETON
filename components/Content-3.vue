<template>
  <section
      class="flex flex-col items-center justify-start bg-[#FFFFFF] h-[800px] xl:h-[800px] max-md:h-[900px]  max-lg:h-[900px]  max-sm:h-[900px]  w-full relative overflow-hidden border-b-gray-300  border-t-gray-300 border-[1px]">
    <div
        class="absolute w-full h-full bg-cover z-0 blur-[2px] shadow-[inset_0px_300px_300px_300px_rgba(0,0,0,0.6)] object-cover bg-fixed bg-center bg-[url('/public/images/image-1.jpg')]"></div>
    <div class="w-full h-auto z-10 text-black flex flex-col items-center text-center mt-28">
      <h1 class="text-[60px] xl:text-[60px] max-lg:text-[28px] max-md:text-[28px] max-sm:text-[28px] text-white px-5 font-bold">Customer <span class="text-[#2472E7]">experience</span></h1>
      <h3 class="text-[20px] xl:text-[20px] max-lg:text-[16px] max-md:text-[16px] max-sm:text-[16px] text-white  mt-2">Save Time and Money with a Top-Rated Handyman</h3>
    </div>
    <div class="w-[1200px] h-[250px] xl:h-[500px] max-md:h-[500px]  max-lg:h-[500px]  max-sm:h-[500px] xl:w-[1200px] max-md:w-[500px]  max-lg:w-[500px]  max-sm:w-[500px] overflow-x-hidden  overflow-y-auto mt-24">
      <swiper style="padding-left:100px; padding-right: 50px; overflow-x: hidden; overflow-y: hidden;" :modules="[Virtual, Navigation, Pagination]" class="w-full h-auto" :loop="true"
              :breakpoints="{
                  '100': {
                    slidesPerView: 1,
                    spaceBetween: 60,
                  },
                  '1000': {
                    slidesPerView: 2,
                    spaceBetween: 70,
                  },
                }"
              :pagination="{
              clickable : true
            }"
              :navigation="true"
              :space-between="70"
              :slides-per-view="2"
      >
        <swiper-slide
            v-for="(slideContent, index) in slides"
            :key="slideContent.id"
            class="w-[600px]">
          <div class="flex flex-col items-start justify-center bg-transparent gap-5">
            <p class="text-[20px] text-white">{{slideContent.desc}}
            </p>
            <div   class="flex items-center text-yellow-400">
              <Icon class="hover:text-white" v-for="(i , index) in slideContent.star_count" :key="index" name="ic:round-star" size="20px"></Icon>
            </div>
            <div class="flex flex-col items-start text-[12px] text-white">
              <h3>{{ slideContent.name + " - " + slideContent.country }}</h3>
              <h4>{{ slideContent.service }}</h4>
            </div>
          </div>
        </swiper-slide
        >
      </swiper>
    </div>
  </section>

</template>

<script setup>
import {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    desc: "The workers were great-knowledgeable, courteous and very efficient. They finished on time and I am very\n" +
        "satisfied.",
    name: "ERAL KESKINKURT",
    star_count: 5,
    service: "Web Developer",
    country: "TURKEY"
  },
  {
    id: 2,
    desc: "The workers were great-knowledgeable, courteous and very efficient. They finished on time and I am very\n" +
        "satisfied.",
    name: "JHONNY SINS",
    star_count: 5 ,
    service: "Web Developer",
    country: "TURKEY"
  },
  {
    id: 3,
    desc: "The workers were great-knowledgeable, courteous and very efficient. They finished on time and I am very\n" +
        "satisfied.",
    name: "SENA ŞENER",
    star_count: 5,
    service: "Web Developer",
    country: "TURKEY"
  },
  {
    id: 4,
    desc: "The workers were great-knowledgeable, courteous and very efficient. They finished on time and I am very\n" +
        "satisfied.",
    name: "FATIH SEN",
    star_count: 5,
    service: "Web Developer",
    country: "TURKEY"
  }
]
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style >
.swiper-button-prev, .swiper-button-next{
  color: #5b5b5e !important;
}
.swiper-button-prev:hover, .swiper-button-next:hover{
  color: #909093 !important;
  transform: scale(0.8) !important;
  transition: all 0.1s;
}

.swiper-pagination {
  transform: translateY(60px);

}
.swiper-pagination-bullet{
  width: 10px;
  height: 10px;
  background: #9e9ea1 !important;
  opacity: 1;
}

.swiper-pagination-bullet:hover{
  background: #f5f5f5 !important;
  transform: scale(1.3) !important;
  transition: all 0.2s;
}

.swiper-pagination-bullet-active{
  background: #f5f5f5 !important;
}
</style>