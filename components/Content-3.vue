<template>
  <section
      class="flex flex-col items-center justify-start bg-[#FFFFFF] h-[800px] xl:h-[800px] max-md:h-[900px]  max-lg:h-[900px]  max-sm:h-[900px]  w-full relative overflow-hidden border-b-gray-300  border-t-gray-300 border-[1px]">
    <div
        class="absolute w-full h-full bg-cover z-0 shadow-[inset_0px_300px_300px_300px_rgba(0,0,0,0.6)] object-cover bg-fixed bg-center bg-[url('/images/emrobeton-9.jpeg')]"></div>
    <div class="w-full h-auto z-10 text-black flex flex-col items-center text-center mt-28">
      <h1 class="text-[60px] xl:text-[60px] max-lg:text-[28px] max-md:text-[28px] max-sm:text-[28px] text-white px-5 font-bold">Önceki  <span class="text-[#2472E7]">Çalışmalarımız</span></h1>
      <h3 class="text-[20px] xl:text-[20px] max-lg:text-[16px] max-md:text-[16px] max-sm:text-[16px] text-white  mt-2"><span class="text-[#2472E7]">{{new Date().getFullYear() - 2010}} yılı </span> aşkın deneyimlerimiz.</h3>
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
              :space-between="100"
              :slides-per-view="2"
      >
        <swiper-slide
            v-for="slideContent in slides"
            :key="slideContent.id"
            class="w-[600px] cursor-pointer">
          <div class="flex flex-col items-start justify-center bg-transparent gap-5">
            <div class="flex flex-col items-start text-[18px] text-[#2472E7] font-[800]">
              <h3>{{ slideContent.title }}</h3>
            </div>
            <p class="text-[14px] text-white">{{slideContent.desc}}
            </p>
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
    title:'BETON SANTRALLERİ',
    desc: "Borçka ilçesinde 2 adet, Artvin merkezde 1 adet hazır beton santrali ile, Borçka ve Artvin şehir merkezine hazır beton üretilip gerek proje ve piyasa talepleri karşılanmaktadır. Hazır beton imalatının agrega ihtiyaçları ocaklarımızdan temin edilmekte ve beton nakliye ve pompalanması kendi araç parkımızla yapılmaktadır.",
  },
  {
    id: 2,
    title:'KONKASÖR SANTRALLERİ',
    desc: "Borçka merkez üretim tesisinde taşocağı sahasında kurulu bulunan 2 adet konkasör tesisi ve 1 adet öğütme tesisi ile üretilen agregalar hazır beton üretiminde, projelerde ve piyasa işlerinde kullanılmaktadır. Kurulu üretim kapasiteleri toplamı 45.000 - 55.000 M3'tür. İlçe içindeki talepler tesislerimizden karşılanmaktadır.",
  },
  {
    id: 3,
    title:'AGREGA OCAKLARI',
    desc: "Agrega üretimi için 2 adet kum - çakıl ocağı ile 1 adet taş ocağı ruhsatlandırılmış olup, hazır beton tesislerinin ihtiyacı olan agrega bu ocaklardan temin edilmektedir. Üretilen agregalar kum - çakıl ve mıcır olarak piyasaya ve diğer taahhüt firmalarınada satışı yapılmaktadır. Aylık üretim kapasiteleri kum - çakıl ocakları 10.000.00 M3, taşocağı ise 60.000.00 ton kadardır.",
  },
  {
    id: 4,
    title:'D.S.İ. 26. BÖLGE MÜDÜRLÜĞÜ',
    desc: "Dere yataklarının temizlenmesi temel kazıları beton imalatı istinad duvar kapıları ve beton dökülmesi işçilikleri yapılmaktadır. 1 adet 24m uzunluğunda köprü inşaatı projesi ve inşaatı, iş kapsamında yapılacaktır.",
  },
  {
    id: 5,
    title:'NAS İNŞAAT A.Ş. - YSE YAPI A.Ş. ORTAK GRŞ.',
    desc: "Natm yöntemine göre tünel kazısının yapılması Sn Bulon İbo Bülon İmalatları-İksa ve Çelik Hazır ile zemin destek işlemlerinin yapılması püskürtme beton imalat ve işçiliği hazır beton imalatı ve kemer kalıp betonlarının dökülmesi kiriş ve taban betonlarının imalat ve işçilikleri firmamız tarafından yapılmıştır.",
  },
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