<template>
<nav class="absolute top-0 z-50 w-full h-[90px] px-[40px] xl:px-[40px] max-lg:px-[30px] max-md:px-[20px] max-sm:px-[20px] bg-black/[0.25] backdrop-blur shadow-[0_0_30px_0_rgba(1,1,1,0.6)] overflow-hidden">
  <div class="flex items-center  w-full h-full justify-between">
    <img class="h-[60px] xl:h-[60px] lg:h-[60px] max-md:h-[50px] max-sm:h-[50px]" src="/images/logo.svg" alt="Emro Beton Logo">
    <ul class="xl:flex max-lg:hidden max-md:hidden max-sm:hidden flex items-center justify-center text-[13px] font-bold text-white gap-6 h-full">
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all">ANASAYFA </nuxt-link> / </li>
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/about" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all"> HAKKIMIZDA </nuxt-link> / </li>
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/services" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all"> HİZMETLER </nuxt-link> / </li>
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/products" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all"> ÜRÜNLER </nuxt-link> / </li>
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/contact" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all"> İLETİŞİM </nuxt-link></li>
    </ul>
    <div class="xl:hidden max-lg:block group max-md:block max-sm:block hidden">
      <Icon @click="showSidebar = !showSidebar"  class="cursor-pointer text-[#2472E7]" :name="showSidebar ? 'ic:baseline-close' : 'iconamoon:menu-burger-horizontal-fill'" size="40px"/>
    </div>
  </div>
</nav>
<div :style="showSidebar ? 'left:0;' : 'left:-300px;'" class="fixed transition-all -left-[250px] w-[250px] min-h-screen bg-[#111112] top-0 z-50 shadow-[0_0_30px_0_rgba(1,1,1,0.9)]">
  <div class="flex flex-col items-center text-white mt-4 text-[16px]">
    <span class="hover:text-[#BCBCBB] transition-all mt-4"><nuxt-link to="/">ANASAYFA</nuxt-link></span>
    <hr class="w-full h-[3px] bg-[#2472E7] mt-4" />
    <span class="hover:text-[#BCBCBB] transition-all mt-4"><nuxt-link to="/about">HAKKIMIZDA</nuxt-link></span>
    <hr class="w-full h-[3px] bg-[#2472E7] mt-4" />
    <span class="hover:text-[#BCBCBB] transition-all mt-4"><nuxt-link to="/services">HİZMETLER</nuxt-link></span>
    <hr class="w-full h-[3px] bg-[#2472E7] mt-4" />
    <span class="hover:text-[#BCBCBB] transition-all mt-4"><nuxt-link to="/products">ÜRÜNLER</nuxt-link></span>
    <hr class="w-full h-[3px] bg-[#2472E7] mt-4" />
    <span class="hover:text-[#BCBCBB] transition-all mt-4"><nuxt-link to="/contact">İLETİŞİM</nuxt-link></span>
    <hr class="w-full h-[3px] bg-[#2472E7] mt-4"/>
  </div>
</div>

<nav :class="{ 'navbar--hidden': !showNavbar }" class="fixed bg-black/[0.25] backdrop-blur -top-[90px] px-[40px] xl:px-[40px] max-lg:px-[30px] max-md:px-[20px] max-sm:px-[20px] transition-all w-full h-[90px] z-40 shadow-[0_0_30px_0_rgba(1,1,1,0.6)]">
  <div class="flex items-center  w-full h-full justify-between">
    <img class="h-[60px] xl:h-[60px] lg:h-[60px] max-md:h-[50px] max-sm:h-[50px]" src="/images/logo.svg" alt="Emro Beton Logo">
    <ul class="xl:flex max-lg:hidden max-md:hidden max-sm:hidden flex items-center justify-center text-[13px] font-bold text-white gap-6 h-full">
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/" active-class="active" class=" relative hover:text-[#BCBCBB] text-[#2472E7] transition-all">ANASAYFA </nuxt-link> / </li>
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/about" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all"> HAKKIMIZDA </nuxt-link> / </li>
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/services" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all"> HİZMETLER </nuxt-link> / </li>
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/products" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all"> ÜRÜNLER </nuxt-link> / </li>
      <li class="flex gap-6 text-[#BCBCBB]"> <nuxt-link to="/contact" active-class="active" class="relative hover:text-[#BCBCBB] text-[#2472E7] transition-all"> İLETİŞİM </nuxt-link></li>
<!--      <li class="relative overflow-hidden"><button class="before:content-[''] before:blur-md before:-top-1 before:-left-10 hover:before:translate-x-[200px] before:opacity-0 hover:before:opacity-50 before:transition before:duration-[1.5s] before:rotate-12 before:shadow-[inset_0_35px_40px_-10px_rgba(0,0,0,0.3)] before:shadow-white before:w-[20px] before:h-[80px] before:absolute w-[130px] h-[40px] font-[700] rounded-[4px]  bg-[#FFCB01] text-black text-[12px]">BOOK SERVICE</button></li>-->
    </ul>
    <div class="xl:hidden max-lg:block group max-md:block max-sm:block hidden">
      <Icon @click="showSidebar = !showSidebar"  class="cursor-pointer text-[#2472E7]" :name="showSidebar ? 'ic:baseline-close' : 'iconamoon:menu-burger-horizontal-fill'" size="40px"/>
    </div>
  </div>
</nav>
</template>

<script setup>
const showSidebar = ref(false);
const showNavbar = ref(true);
const lastScrollPosition = ref(0);


const onScroll = () => {
  // Get the current scroll position
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  if (currentScrollPosition < 0) {
    return
  }
  // Here we determine whether we need to show or hide the navbar
  showNavbar.value = currentScrollPosition < lastScrollPosition.value
  // Set the current scroll position as the last scroll position
  lastScrollPosition.value = currentScrollPosition
}

onMounted (() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

</script>

<style scoped>
.navbar--hidden{
  top: 0;
}
.active::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background: #2472E7;
  bottom: -35px;
  left: 0;
}
</style>