<template>
  <section
      class="flex flex-col items-center justify-center bg-[#FFFFFF] h-[860px] xl:h-[860px] max-lg:h-[900px] max-md:h-[900px] max-sm:h-[900px] w-full relative ">
    <div class="flex xl:flex max-lg:flex-col max-md:flex-col max-sm:flex-col  items-center justify-between  gap-20">
      <div
          class="text-black flex flex-col gap-5 items-start w-[600px] xl:w-[600px] max-lg:w-[330px] max-md:w-[330px] max-sm:w-[330px] mt-16">
        <Icon class="text-[60px] font-bold text-[#2472E7] mb-10" name="ooui:quotes-ltr"></Icon>
        <div class="w-full">
          <h1 class="text-[40px] xl:text-[40px] max-lg:text-[28px] max-md:text-[28px] max-sm:text-[28px] font-bold">
            Beton malzemeleri üretim hizmetinde <span class="text-[#2472E7]">{{ date.getFullYear() - 2010 }} yılı </span> aşkın <span class="text-[#2472E7]"> deneyime </span> sahibiz.</h1>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img
            class="w-[500px] xl:w-[500px] max-lg:w-[300px] max-md:w-[300px] max-sm:w-[300px]  h-[600px] xl:h-[600px] max-lg:h-[350px] max-md:h-[350px] max-sm:h-[350px] object-cover"
            src="/images/hero-1.jpeg" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
const date = new Date()
</script>
