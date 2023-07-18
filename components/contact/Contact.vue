<template>
  <section class="flex flex-col items-center justify-center h-[500px] xl:h-[500px] max-lg:h-[1250px] bg-white max-md:h-[1250px] max-sm:h-[1250px] w-full relative ">
    <div class="flex xl:flex max-lg:flex-col max-md:flex-col max-sm:flex-col w-auto xl:w-auto max-lg:w-full max-md:w-full max-sm:w-full items-center justify-center">
      <div class="flex flex-col items-center justify-start w-[300px] h-[260px] bg-[#111112]">
        <div class="w-full relative">
          <div class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all hover:before:scale-100  hover:before:bg-[#111112] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#2472E7]">
            <Icon class="z-10 text-[#111112] group-hover:text-[#2472E7]" name="material-symbols:location-on" size="55px" />
          </div>
          <div class="flex flex-col items-start gap-4 text-white px-8 py-20">
            <span class="text-[20px] font-[600]">KONUM</span>
            <p class="text-[16px] font-[500]">Yeni Yol Mahallesi <br> Emro Beton <br> İdari Binası Kat 2</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-start w-[300px] h-[260px] bg-[#2472E7]">
        <div class="w-full relative">
          <div class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all hover:before:scale-100  hover:before:bg-[#2472E7] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#111112]">
            <Icon class="z-10 group-hover:text-[#111112] text-[#2472E7]" name="tabler:clock-hour-9" size="55px" />
          </div>
          <div class="flex flex-col items-start gap-4 text-[#111112] px-8 py-20">
            <span class="text-[20px] font-[600]">ÇALIŞMA SAATLERİ</span>
            <p class="text-[16px] font-[500]">Pazartesi - Cumartesi<br> 08:00 - 18:00</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-start w-[300px] h-[260px] bg-[#111112]">
        <div class="w-full relative">
          <div class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all hover:before:scale-100  hover:before:bg-[#111112] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#2472E7]">
            <Icon class="z-10 text-[#111112] group-hover:text-[#2472E7]" name="material-symbols:phone-android-outline" size="55px" />
          </div>
          <div class="flex flex-col items-start gap-4 text-white px-8 py-20">
            <span class="text-[20px] font-[600]">OFİS TELEFEONU</span>
            <p class="text-[16px] font-[500]">+ 1 555 9345 677 <br> + 1 555 9345 678 <br> + 1 555 9345 679</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-start w-[300px] h-[260px] bg-[#2472E7]">
        <div class="w-full relative">
          <div class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all hover:before:scale-100  hover:before:bg-[#2472E7] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#111112]">
            <Icon class="z-10 group-hover:text-[#111112] text-[#2472E7]" name="mingcute:send-plane-fill" size="55px" />
          </div>
          <div class="flex flex-col items-start gap-4 text-black px-8 py-20">
            <span class="text-[20px] font-[600]">EMAIL</span>
            <p class="text-[16px] font-[500]">office@bold-themes.com<br> support@bold-themes.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

</script>