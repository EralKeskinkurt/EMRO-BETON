<template>
<section class="w-full min-h-screen bg-white py-10">
<div class="w-full flex flex-wrap items-center justify-center">
  <div v-for="product in products" :key="product.id" class="w-[420px] h-auto p-[30px]">
    <div  class="flex flex-col items-center justify-start w-full h-full border-[1px] border-gray-950/30">
      <img class="w-full h-[225px] object-cover border-b-black/30 border-b-[2px]" :src="product.img" alt="img">
      <div class="w-full h-[225px] overflow-hidden  bg-[#FBFBFB] py-3 px-2">
        <h3 class="text-black/40 font-bold text-[13px] text-center">{{product.typ}}</h3>
        <h1 class="text-black font-bold text-[30px] text-center">{{product.prod}}</h1>
        <p class="text-center text-[14px] text-gray-950/80 mt-5 font-[600]">{{product.desc}}</p>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script setup >
const products = [
    {id:1,prod:'HAZIR BETON', desc:'Yüksek kaliteli ve dayanıklı beton üretimi sağlama. Farklı mukavemet sınıflarında beton üretebilme.', img:'/images/beton.jpg' , typ:'BETON ÜRÜN'},
    {id:2,prod:'BORDÜR', desc:'Yol kenarlarında kullanılan beton veya taş malzemeden yapılmış sınırlayıcı elemanlar.', img:'/images/bordür.jpg', typ:'BETON ÜRÜN'},
    {id:3,prod:'OLUK', desc:'Yağmur suyunun tahliyesini sağlayan beton veya metal yapı elemanları.', img:'/images/oluk.jpg', typ:'BETON ÜRÜN'},
    {id:4,prod:'PARKE', desc:'Yürüme yolları, bahçe ve peyzaj düzenlemelerinde kullanılan beton veya taş malzemeden yapılmış döşeme elemanları.', img:'/images/parke.jpg', typ:'BETON ÜRÜN'},
    {id:5,prod:'KALDIRIM TAŞI', desc:'Yaya trafiğinin güvenli ve düzgün bir şekilde ilerlemesini sağlayan beton veya doğal taş malzemeden yapılmış taşlar.', img:'/images/kaldirimtasi.jpg', typ:'BETON ÜRÜN'},
    {id:6,prod:'MICIR', desc:' İnşaat ve yol yapımında kullanılan granüler yapılı malzeme.', img:'/images/micir.jpg', typ:'AGREGA ÜRÜN'},
    {id:7,prod:'KUM', desc:'Beton üretimi ve yapı temelleri için kullanılan inşaat sektöründe temel malzemelerden biri.', img:'/images/kum.jpg', typ:'AGREGA ÜRÜN'},
    {id:8,prod:'ÇAKIL', desc:'Yol yapımı, bahçe düzenlemesi ve beton üretiminde kullanılan doğal taş malzemesi.', img:'/images/cakil.jpg',typ:'AGREGA ÜRÜN'},
    {id:9,prod:'BYPASS', desc:'Bypass dolgu malzemeleri, geçici olarak bir alanı veya yapıyı kapatmak, yönlendirmek veya değiştirmek için kullanılan malzemelerdir.', img:'/images/bypass.jpg', typ:'AGREGA ÜRÜN'},
  ]
</script>
