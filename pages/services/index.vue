<template>
  <div class="relative flex items-center justify-center min-h-[600px] xl:min-h-[600px] max-md:min-h-[600px] max-lg:min-h-[1050px] max-sm:min-h-[700px] w-full bg-[#F3F2ED]">
    <div class="absolute w-full h-full bg-cover z-0 shadow-[inset_0px_300px_300px_300px_rgba(0,0,0,0.6)] object-cover bg-fixed bg-center bg-[url('/images/hero-6.jpg')]"></div>
    <Services />
  </div>
  <Content1 />
  <Content2 />
  <Content3 />
  <Content4 />
</template>

<script setup>

import Services from "~/components/services/Services.vue";
import Content1 from "~/components/services/Content-1.vue"
import Content2 from "~/components/services/Content-2.vue"
import Content3 from "~/components/services/Content-3.vue"
import Content4 from "~/components/services/Content-4.vue"
</script>