<template>
  <div class="relative flex items-center justify-center min-h-[600px] xl:min-h-[600px] max-md:min-h-[600px] max-lg:min-h-[1050px] max-sm:min-h-[700px] w-full bg-[#F3F2ED]">
    <div class="absolute w-full h-full bg-cover z-0 shadow-[inset_0px_300px_300px_300px_rgba(0,0,0,0.6)] object-cover bg-fixed bg-center bg-[url('/images/emrobeton-1.jpeg')]"></div>
    <AboutUs />
  </div>
  <Content1 />
  <Content2 />
  <Content3 />
</template>

<script setup>

import AboutUs from "~/components/about/AboutUs.vue";
import Content1 from "~/components/about/Content-1.vue";
import Content2 from "~/components/about/Content-2.vue";
import Content3 from "~/components/about/Content-3.vue";

</script>