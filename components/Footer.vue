<template>
<footer class="flex flex-col items-center justify-center w-full bg-[#111112] gap-28 h-auto pb-24">
  <div class="flex xl:flex max-lg:flex-col max-md:flex-col max-sm:flex-col items-center justify-between xl:justify-between max-lg:justify-center max-md:justify-center gap-7 max-sm:justify-center border-[1px] px-10 h-[180px] xl:h-[180px] max-lg:h-[270px] max-md:h-[270px] max-sm:h-[270px] rounded-sm mt-24 w-[1200px] xl:w-[1200px] max-lg:w-[260px] max-md:w-[260px] max-sm:w-[260px] border-[#59595A]">
    <h1 class="text-[40px] xl:text-[40px] max-lg:text-[28px] max-md:text-[28px] max-sm:text-[28px] text-white">Hizmetimizden yararlanmak için</h1>
    <button class="before:content-[''] relative overflow-hidden before:blur-md before:-top-1 before:-left-10 hover:before:translate-x-[200px] before:opacity-0 hover:before:opacity-50 before:transition before:duration-[1.5s] before:rotate-12 before:shadow-[inset_0_35px_40px_-10px_rgba(0,0,0,0.3)] before:shadow-white before:w-[20px] before:h-[80px] before:absolute w-[210px] h-[60px] font-[600] rounded-[4px]  bg-[#2472E7] text-black text-[14px]">BİZİMLE İLETİŞİME GEÇİN</button>
  </div>
  <div class="flex xl:flex max-lg:flex-col max-md:flex-col max-sm:flex-col items-start gap-32 justify-center">
    <div class="flex flex-col gap-4 items-start justify-start">
      <h2 class="text-[20px] text-white">Bizimle iletişime geçin</h2>
      <span class="w-[30px] bg-white h-[2px]"></span>
      <span class="text-white text-[13px] flex items-center gap-2"><Icon class="text-[#2472E7] hover:text-white transition-all" name="ph:phone-fill" size="23px"/> 1-800-700-600</span>
      <span class="text-white text-[13px] flex items-center gap-2"><Icon class="text-[#2472E7] hover:text-white transition-all" name="material-symbols:mail-rounded" size="23px"/> emrobeton@hotmail.com</span>
      <span class="text-white text-[13px] flex items-center gap-2"><Icon class="text-[#2472E7] hover:text-white transition-all"  name="ic:baseline-location-on" size="23px"/> Yeni Yol Mahallesi <br> Emro Beton İdari Binası Kat 2</span>
      <div class="flex items-center gap-3 mt-4">
        <a href="https://www.facebook.com/profile.php?id=100094546605349" class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[50px] hover:before:h-[50px] before:rounded-full before:duration-300 before:transition-all  hover:before:scale-100 hover:before:bg-white before:absolute relative flex group items-center justify-center w-[42px] h-[42px] bg-transparent border-[2px] border-white rounded-full overflow-hidden">
          <Icon class="z-10 group-hover:text-[#111112] text-white" name="ion:social-facebook" size="25px" />
        </a>
        <a href="https://www.instagram.com/emrobeton08/" class="before:content-[''] before:w-[0px] before:h-[0px] hover:before:w-[50px] hover:before:h-[50px] before:transition-all before:rounded-full before:duration-300  hover:before:scale-100 hover:before:bg-white before:absolute relative flex group items-center justify-center w-[42px] h-[42px] bg-transparent border-[2px] border-white rounded-full overflow-hidden">
          <Icon class="z-10 group-hover:text-[#111112] text-white" name="mdi:twitter" size="25px" />
        </a>
      </div>
    </div>
    <div class="flex flex-col items-start gap-2 justify-start">
      <h2 class="text-[20px] text-white">Hizmetlerimiz</h2>
      <span class="w-[30px] bg-white h-[2px] mt-2"></span>
      <nuxt-link to="/services" class="text-[13px] text-white mt-2 cursor-pointer hover:text-[#ffcb01] transition-all">Yol Yapımı ve Altyapı Hizmetleri</nuxt-link>
      <hr class="border-gray-500 w-[130px] h-[1px] mt-2" />
      <nuxt-link to="/services" class="text-[13px] text-white mt-2 cursor-pointer hover:text-[#ffcb01] transition-all">İnşaat Projeleri</nuxt-link>
      <hr class="border-gray-500 w-[130px] h-[1px] mt-2" />
      <nuxt-link to="/services" class="text-[13px] text-white mt-2 cursor-pointer hover:text-[#ffcb01] transition-all">Bahçe Düzenlemesi ve Peyzaj Hizmetleri</nuxt-link>
      <hr class="border-gray-500 w-[130px] h-[1px] mt-2" />
      <nuxt-link to="/services" class="text-[13px] text-white mt-2 cursor-pointer hover:text-[#ffcb01] transition-all">İnşaat Malzemeleri Tedariki</nuxt-link>
      <hr class="border-gray-500 w-[130px] h-[1px] mt-2" />
    </div>
    <div class="flex flex-col items-start gap-2 justify-start">
      <h2 class="text-[20px] text-white">Yapılan Bazı Çalışmalar</h2>
      <span class="w-[30px] bg-white h-[2px] mt-2"></span>
      <nuxt-link to="/about" class="text-[13px] text-white mt-2 cursor-pointer hover:text-[#ffcb01] transition-all">BETON SANTRALLERİ</nuxt-link>
      <hr class="border-gray-500 w-[130px] h-[1px] mt-2" />
      <nuxt-link to="/about" class="text-[13px] text-white mt-2 cursor-pointer hover:text-[#ffcb01] transition-all">KONKASÖR SANTRALLERİ</nuxt-link>
      <hr class="border-gray-500 w-[130px] h-[1px] mt-2" />
      <nuxt-link to="/about" class="text-[13px] text-white mt-2 cursor-pointer hover:text-[#ffcb01] transition-all">AGREGA OCAKLARI</nuxt-link>
      <hr class="border-gray-500 w-[130px] h-[1px] mt-2" />
      <nuxt-link to="/about" class="text-[13px] text-white mt-2 cursor-pointer hover:text-[#ffcb01] transition-all">D.S.İ. 26. BÖLGE MÜDÜRLÜĞÜ</nuxt-link>
      <hr class="border-gray-500 w-[130px] h-[1px] mt-2" />
    </div>
  </div>
</footer>
</template>

<script setup>

</script>