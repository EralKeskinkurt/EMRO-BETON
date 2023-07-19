<template>
  <section class="flex flex-col items-center justify-start bg-[#F3F2ED] h-[610px] xl:h-[610px] max-lg:h-[1700px] max-md:h-[1700px] max-sm:h-[1700px] w-full relative ">
    <div class="flex xl:flex max-lg:flex-col max-md:flex-col z-20 max-sm:flex-col items-center justify-center absolute -top-32">
      <div class="flex flex-col xl:flex-col min-lg:flex min-md:flex min-sm:flex items-center justify-start w-[400px] xl:w-[400px] lg:w-[400px] max-md:w-[290px] max-sm:w-[290px]  h-[617px] xl:h-[617px] max-lg:h-[540px] max-md:h-[540px] max-sm:h-[540px] border-[1px] border-black/80 bg-[#111112]">
        <img class="h-[360px] xl:h-[360px] max-lg:h-[235px] max-md:h-[235px] max-sm:h-[235px] w-full object-cover" src="/images/beton.jpg" alt="home1">
        <div class="w-full relative">
          <div class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all hover:before:scale-100  hover:before:bg-[#111112] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#2472E7]">
            <Icon class="z-10 text-[#111112] group-hover:text-[#2472E7]" name="game-icons:coal-pile" size="55px" />
          </div>
          <div class="flex flex-col items-start justify-end gap-4 text-white px-8 mt-16">
            <span class="text-[20px] font-[600]">HAZIR BETON</span>
            <p class="text-[16px] font-[400]">Yüksek kaliteli ve dayanıklı beton üretimi sağlama. Farklı mukavemet sınıflarında beton üretebilme.</p>
            <nuxt-link to="/products" class="text-[#2472E7] font-bold text-[12px] underline" >DAHA FAZLA</nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-start w-[400px] xl:w-[400px] lg:w-[400px] max-md:w-[290px] max-sm:w-[290px]  h-[617px] xl:h-[617px] max-lg:h-[540px] max-md:h-[540px] max-sm:h-[540px] bg-[#2472E7] border-[1px] border-black/80">
        <img class="h-[360px] xl:h-[360px] max-lg:h-[235px] max-md:h-[235px] max-sm:h-[235px] w-full object-cover" src="/images/bypass.jpg" alt="home1">
        <div class="w-full relative">
          <div class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all  hover:before:scale-100 hover:before:bg-[#2472E7] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#111112]">
            <Icon class="z-10 group-hover:text-[#111112] text-[#2472E7]" name="game-icons:coal-pile" size="55px" />
          </div>
          <div class="flex flex-col items-start justify-end gap-4 text-white px-8 mt-16">
            <span class="text-[20px] font-[600]">BYPASS</span>
            <p class="text-[16px] font-[400]">Bypass dolgu malzemeleri, geçici olarak bir alanı veya yapıyı kapatmak, yönlendirmek veya değiştirmek için kullanılan malzemelerdir.</p>
            <nuxt-link to="/products" class="text-[#111112] font-bold text-[12px] underline" >DAHA FAZLA</nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-start w-[400px] xl:w-[400px] lg:w-[400px] max-md:w-[290px] max-sm:w-[290px]  h-[617px] xl:h-[617px] max-lg:h-[540px] max-md:h-[540px] max-sm:h-[540px] bg-[#111112] border-[1px] border-black/80">
        <img class="h-[360px] xl:h-[360px] max-lg:h-[235px] max-md:h-[235px] max-sm:h-[235px] w-full object-cover" src="/images/oluk.jpg" alt="home1">
        <div class="w-full relative">
          <div class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[68px] hover:before:h-[68px] before:transition-all hover:before:scale-100  hover:before:bg-[#111112] before:absolute absolute flex group items-center justify-center -top-8 left-8 w-[68px] h-[68px] bg-[#2472E7]">
            <Icon class="z-10 text-[#111112] group-hover:text-[#2472E7]" name="game-icons:coal-pile" size="55px" />
          </div>
          <div class="flex flex-col items-start justify-end gap-4 text-white px-8 mt-16">
            <span class="text-[20px] font-[600]">OLUK</span>
            <p class="text-[16px] font-[400]">Yağmur suyunun tahliyesini sağlayan beton veya metal yapı elemanları.</p>
            <nuxt-link to="/products" class="text-[#2472E7] font-bold text-[12px] underline" >DAHA FAZLA</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

</script>