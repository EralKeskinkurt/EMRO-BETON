<template>
  <div class="relative flex items-center justify-center min-h-[600px] xl:min-h-[600px] max-md:min-h-[600px] max-lg:min-h-[1050px] max-sm:min-h-[700px] w-full bg-[#111112]">
    <div class="absolute w-full h-full bg-cover z-0 shadow-[inset_0px_300px_300px_300px_rgba(0,0,0,0.6)] object-cover bg-fixed bg-center bg-[url('/images/emrobeton-14.jpeg')]"></div>
    <ContactTitle />
  </div>
  <Contact/>
</template>

<script setup>
import Contact from "~/components/contact/Contact.vue";
import ContactTitle from "~/components/contact/ContactTitle.vue";
</script>