<template>
  <section class="flex flex-col items-center justify-center bg-[#FFFFFF] h-auto w-full relative ">
    <div class="flex flex-wrap  items-center justify-center py-16 gap-10  w-full h-full">
      <div class="text-black flex flex-col gap-5 items-start justify-start h-auto px-5  w-[50%] xl:w-[50%] max-lg:w-[100%] max-md:w-[100%] max-sm:w-[100%] pt-5">
        <h1 class="text-[40px] xl:text-[40px] mb-10 max-lg:text-[28px] max-md:text-[28px] max-sm:text-[28px] font-bold">SİZLERE SUNDUĞUMUZ HİZMETLER</h1>
        <div class="flex items-center gap-2">
          <Icon class="hover:text-[#111121] text-[#2472E7] transition-all" name="iconamoon:3d" size="40px" />
            <h2 class="text-[16px] font-[600]">Yol Yapımı ve Altyapı Hizmetleri</h2>
        </div>
        <div class="flex  items-center gap-2">
          <Icon class="hover:text-[#111121] text-[#2472E7] transition-all" name="iconamoon:3d" size="40px" />
          <h2 class="text-[16px] font-[600]">Proje Çalışmaları</h2>
        </div>
        <div class="flex  items-center gap-2">
          <Icon class="hover:text-[#111121] text-[#2472E7] transition-all" name="iconamoon:3d" size="40px" />
          <h2 class="text-[16px] font-[600]">Bahçe Düzenlemesi ve Peyzaj Hizmetleri</h2>
        </div>
        <div class="flex  items-center gap-2">
          <Icon class="hover:text-[#111121] text-[#2472E7] transition-all" name="iconamoon:3d" size="40px" />
          <h2 class="text-[16px] font-[600]">İnşaat Malzemeleri Tedariki</h2>
        </div>
        <nuxt-link to="/services" class="bg-[#2472E7] hover:bg-[#2472E7]/90 font-bold py-2 px-4 rounded-sm mt-3 ml-5">Daha fazla bilgi</nuxt-link>
      </div>
      <div class="w-[40%] xl:w-[40%] max-lg:w-[100%] max-md:w-[100%] max-sm:w-[100%] h-full px-5">
        <img class="w-full min-h-[460px] object-cover" src="/images/emrobeton-6.jpeg" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
