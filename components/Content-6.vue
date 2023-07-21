<template>
  <section class="flex flex-col items-center justify-start h-[500px] xl:h-[500px] max-lg:h-[1250px] bg-[#212121] max-md:h-[1250px] max-sm:h-[1250px] w-full relative ">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.0258322644895!2d41.68023450126257!3d41.37352347839418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067e9e0621df725%3A0xaf1f0490752ad91b!2zQm9yw6drYSwgQXJ0dmlu!5e0!3m2!1str!2str!4v1689955501263!5m2!1str!2str"  class="w-full h-full xl:h-full max-lg:h-[450px] max-md:h-[450px] max-sm:h-[450px] absolute z-0 left-0 right-0 bottom-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="flex xl:flex max-lg:flex-col max-md:flex-col max-sm:flex-col w-auto xl:w-auto max-lg:w-full max-md:w-full max-sm:w-full items-center justify-center absolute -top-40">
      <div class="flex flex-col items-center justify-start w-[300px] h-[260px] bg-[#111112]">
        <div class="w-full relative">
          <a href="https://goo.gl/maps/y9xdmDhvpvTaCMjA9" class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all hover:before:scale-100  hover:before:bg-[#111112] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#2472E7]">
            <Icon class="z-10 text-[#111112] group-hover:text-[#2472E7]" name="material-symbols:location-on" size="55px" />
          </a>
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
          <a href="tel:0466 415 1060" class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all hover:before:scale-100  hover:before:bg-[#111112] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#2472E7]">
            <Icon class="z-10 text-[#111112] group-hover:text-[#2472E7]" name="material-symbols:phone-android-outline" size="55px" />
          </a>
          <div class="flex flex-col items-start gap-4 text-white px-8 py-20">
            <span class="text-[20px] font-[600]">OFİS TELEFEONU</span>
            <a href="tel:0466 415 1060" class="text-[16px] font-[500]">0466 415 1060</a>
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
            <p class="text-[16px] font-[500]">emrobeton@hotmail.com<br> emrobeton@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

</script>
