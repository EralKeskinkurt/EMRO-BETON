<template>
  <div class="relative min-h-[800px]  xl:h-[800px] max-md:h-[700px] max-lg:h-[750px] max-sm:h-[700px] w-full bg-[#F3F2ED]">
    <Swiper
        :modules="[Autoplay, EffectFade]"
        class="absolute w-full h-full z-0 transition-all"
        :slides-per-view="1"
        :effect="'fade'"
        :loop="true"
        :autoplay="{
          waitForTransition : true,
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }"
    >
      <SwiperSlide class="w-full h-full z-0 transition-all absolute select-none" v-for="slide in slides" :key="slide.id">
        <img class="w-full h-full object-cover z-0" :src="slide.backgroundImg" alt="hero-image">
        <div class="absolute inset-0 bg-black/30 z-20"></div>
      </SwiperSlide>
    </Swiper>
  </div>
  <HeroText />
  <Content1 />
  <Content2 />
  <Content3 />
  <Content6 />
</template>

<script setup>
import Content1 from "~/components/Content-1.vue";
import Content2 from "~/components/Content-2.vue"
import Content3 from "~/components/Content-3.vue"
import Content6 from "~/components/Content-6.vue"
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, EffectFade} from "swiper"
import 'swiper/css';
const slides = [
  {id: 1, backgroundImg:'/images/hero-1.jpeg'},
  {id: 2, backgroundImg:'/images/hero-2.jpeg'}
]
</script>

