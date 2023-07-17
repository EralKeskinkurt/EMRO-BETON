<template>
  <section
      class="flex flex-col items-center justify-start py-10 bg-white min-h-screen w-full relative overflow-hidden border-b-gray-300 border-t-gray-300 border-[1px]">
    <div class="w-full h-auto z-10 text-black flex flex-col items-center text-center mt-28">
      <h1 class="text-[40px] xl:text-[40px] max-lg:text-[28px] max-md:text-[28px] max-sm:text-[28px] text-black px-5 font-bold">
        ÖNCEKİ <span class="text-[#2472E7]">ÇALIŞMALARIMIZ</span></h1>
    </div>
    <div class="w-full h-full z-10 mt-20">
      <div class="flex flex-wrap items-center justify-center w-full h-full gap-5">
        <div v-for="works in previousWorks"  :key="works.id" class="border-[12px] border-[#2472E7]/90 w-[270px] h-[270px] cursor-pointer rounded-sm overflow-hidden group relative">
          <img :src="works.img" class="w-full h-full object-cover" alt="img">
          <div
              class="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all overflow-hidden  w-full h-full bg-black/40  p-2">
            <h1 class="text-white text-[20px] font-bold">{{works.title}}</h1>
            <p class="text-white text-[14px] font-[500]">{{works.issue}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const previousWorks = [
  {
    id: 1,
    img:'/images/betonsantralleri.PNG',
    title: 'BETON SANTRALLERİ',
    issue: 'HER DOZDA HAZIR BETON İMALATI VE NAKLİYE İŞLERİ',
    todo: 'Borçka ilçesinde 2 adet, Artvin merkezde 1 adet hazır beton santrali ile, Borçka ve Artvin şehir merkezine hazır beton üretilip gerek proje ve piyasa talepleri karşılanmaktadır. Hazır beton imalatının agrega ihtiyaçları ocaklarımızdan temin edilmekte ve beton nakliye ve pompalanması kendi araç parkımızla yapılmaktadır.'
  },
  {
    id: 2,
    img:'/images/konkasörtesisleri.PNG',
    title: 'KONKASÖR SANTRALLERİ',
    issue: 'GRANÜLOMETRİK MALZEME ÜRETİMİ',
    todo: "Borçka merkez üretim tesisinde taşocağı sahasında kurulu bulunan 2 adet konkasör tesisi ve 1 adet öğütme tesisi ile üretilen agregalar hazır beton üretiminde, projelerde ve piyasa işlerinde kullanılmaktadır. Kurulu üretim kapasiteleri toplamı 45.000 - 55.000 M3'tür. İlçe içindeki talepler tesislerimizden karşılanmaktadır."
  },
  {
    id: 3,
    img:'/images/agregaocakları.PNG',
    title: 'AGREGA OCAKLARI',
    issue: 'KUM ÇAKIL TEMİNİ VE GRANULOMETRIK BETON MALZEMESİ İMALATLARI',
    todo: "Agrega üretimi için 2 adet kum - çakıl ocağı ile 1 adet taş ocağı ruhsatlandırılmış olup, hazır beton tesislerinin ihtiyacı olan agrega bu ocaklardan temin edilmektedir. Üretilen agregalar kum - çakıl ve mıcır olarak piyasaya ve diğer taahhüt firmalarınada satışı yapılmaktadır. Aylık üretim kapasiteleri kum - çakıl ocakları 10.000.00 M3, taşocağı ise 60.000.00 ton kadardır."
  },
  {
    id: 4,
    img:'/images/dsi26bölge.png',
    title: 'D.S.İ. 26. BÖLGE MÜDÜRLÜĞÜ',
    issue: 'ARTVİN BORÇKA İLÇESİ İÇKALE DERESİ HAVZASINDA BULUNAN KÖYLERİN İÇKALE DERESİ 2.KISIM İLE ÇAYLI KÖYÜNÜN ÇAYLI DERESİ TAŞKINLARINDAN KORUNMASI İNŞAATI',
    todo: "Dere yataklarının temizlenmesi temel kazıları beton imalatı istinad duvar kapıları ve beton dökülmesi işçilikleri yapılmaktadır. 1 adet 24m uzunluğunda köprü inşaatı projesi ve inşaatı, iş kapsamında yapılacaktır."
  },
  {
    id: 5,
    img:'/images/nasinsaat.png',
    title: 'NAS İNŞAAT A.Ş. - YSE YAPI A.Ş. ORTAK GRŞ.',
    issue: 'HOPA BORÇKA (CANKURTARAN TÜNELİ DAHİL) 6+500 - 13+787.77KM YOL VE BAĞLANTI TÜNELLERİNİN YAPIMI (İŞİ BORÇKA ÇIKIŞI).',
    todo: "Natm yöntemine göre tünel kazısının yapılması Sn Bulon İbo Bülon İmalatları-İksa ve Çelik Hazır ile zemin destek işlemlerinin yapılması püskürtme beton imalat ve işçiliği hazır beton imalatı ve kemer kalıp betonlarının dökülmesi kiriş ve taban betonlarının imalat ve işçilikleri firmamız tarafından yapılmıştır."
  },
  {
    id: 6,
    img:'/images/türkerlerins.png',
    title: 'TÜRKERLER İNŞ.TUR.SAN. VE TİC. A.Ş.',
    issue: 'DENGE BACASI ŞAFT KAZISI VE KAZI DESTEKLEME İŞLERİ',
    todo: "Yayla regülatörü ve hes inşaatında projelendirilen denge bacası şaft kazısı ve kazı destekleme işleri firmamız tarafından yapılmıştır."
  },
  {
    id: 7,
    img:'/images/borckakaymakamlıgı.png',
    title: 'BORÇKA KAYMAKAMLIĞI (K.H.G.B.)',
    issue: 'BORÇKA İLÇESİNDEKİ 10 ADET KÖYLERE BETON YOL İNŞAATI YAPIMI',
    todo: "Köy yollarının tesfiye edilmesi-c-25 hazır beton ile 20cm kalınlığında beton dökülmesi ve bütün işçilikleri firmamız tarafından yapılmıştır."
  },
  {
    id: 8,
    img:'/images/cengizinssan.png',
    title: 'CENGİZ İNŞAAT SAN. VE TİC. A.Ş.',
    issue: 'ATASU BARAJI VE HES İNŞAATI (DSİ XXII.BÖLGE MÜD.)',
    todo: "Enerji tünelinin betonla kaplanması inşaatı çerçevesinde tünel içinde kırım ve düzeltmeler, demir işçilikleri, kalıp işçilikleri ve  beton dökülmesi işçilikleri yapılmıştır."
  },
  {
    id: 9,
    img:'/images/etibakır-1.png',
    title: 'ETİ BAKIR A.Ş. (MURGUL İŞLETMESİ)',
    issue: 'ÇAKMAKKAYA SAHASINDA KAZI YAPILMASI YÜKLEME VE NAKLİYESİ SONDAJ ULAŞIM YOLLARININ YAPILMASI',
    todo: "Damar ve çakmakkaya sahasında maden üstü malzemenin delme, patlatma, kazı, yükleme, nakliyesi ve bilümum kazı işçilikleri firmamız tarafından yapılmıştır. Dekapajla ilgili ilk sözleşme S.S.Murgul Kooperatifi adına düzenlenerek firmamız tarafından imalatı yapılmıştır."
  },
  {
    id: 10,
    img:'/images/atikbaraji.png',
    title: 'ETİ BAKIR A.Ş. (MURGUL İŞLETMESİ)',
    issue: 'ATIK BARAJI, ŞAFT VE ŞAFT ÜSTÜ TÜNEL YAPILMASI İŞİ',
    todo: "Atık barajı ile ilgili olarak dikey  86m şaft kazısı yapılması püskürtme betonu yapılması proje devamında kalıplı şaft imalatlarının yapılması, demir, kalıp, beton işçiliklerinin yapılması."
  },
]
</script>