<template>
<section class="w-full min-h-screen bg-white py-10">
<div class="w-full flex flex-wrap items-center justify-center">
  <div v-for="product in products" :key="product.id" class="w-[420px] h-auto p-[30px]">
    <div  class="flex flex-col items-center justify-start w-full h-full border-[1px] border-gray-950/30">
      <img class="w-full h-[225px] object-cover border-b-black/30 border-b-[2px]" :src="product.image" alt="img">
      <div class="w-full h-[225px] overflow-hidden  bg-[#FBFBFB] py-3 px-2">
        <h1 class="text-black font-bold text-[30px] text-center">{{product.title}}</h1>
        <p class="text-center text-[14px] text-gray-950/80 font-[600]">{{product.description}}</p>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script setup >
const products = [
  {id:1 , title:'BETON', image: '/images/beton.jpg', description: 'Beton, dayanıklı bir yapı malzemesidir. Su, çimento, kum ve çakılın karıştırılmasıyla elde edilir. Binaların temellerinden duvarlarına kadar birçok alanda kullanılır.'},
  {id:2 , title:'ÇAKIL VE KUM', image: '/images/cakilkum.jpg', description: 'Çakıl ve kum doğal olarak oluşan malzemelerdir. Çakıllar yuvarlak ve düz yapıya sahipken, kumlar daha ince tanelidir. İnşaat, bahçe düzenlemesi ve plajlar gibi birçok alanda kullanılırlar.'},
  {id:3 , title:'MICIR', image: '/images/micir.jpg', description: 'Mıcır, doğal olarak oluşan ve çakılların daha küçük boyutlu bir türüdür. Genellikle 2-20 mm arasında değişen boyutlara sahiptir. İnşaat sektöründe yol yapımı ve asfalt kaplamalarında kullanılır.'},
  {id:4 , title:'BORDÜR', image: '/images/bordür.jpg', description: 'Bordür, yol kenarlarına veya bahçe düzenlemelerinde kullanılan, genellikle beton veya taş malzemeden yapılan bir kenarlık türüdür. Yol sınırlarını belirlemek, düzenli bir görüntü sağlamak ve yürüme alanlarını ayırmak için kullanılır.'},
  {id:5 , title:'PARKE', image: '/images/parke.jpg', description: 'Parke, iç mekanlarda kullanılan zemin kaplamasıdır. Ahşap veya laminant malzemeden yapılan, dayanıklı ve estetik bir seçenektir.'},
]
</script>
