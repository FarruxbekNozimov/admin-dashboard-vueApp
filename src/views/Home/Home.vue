<script setup>
import Header from '@/components/Header/Header.vue'
</script>

<template>
  <Header />
  <div class="p-5">
    <div class="p-5 bg-white rounded-xl shadow-md grid grid-cols-4">
      <div class="flex items-center justify-center gap-5">
        <img src="@/assets/img/barbell.png" class="h-20" alt="image" />
        <div class="">
          <h3 class="text-md text-[#A098AE]">Mahsulotlar</h3>
          <h4 class="text-[36px] font-bold text-[#303972]">341</h4>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <img src="@/assets/img/clients.png" class="h-20" alt="image" />
        <div class="">
          <h3 class="text-md text-[#A098AE]">Mijozlar</h3>
          <h4 class="text-[36px] font-bold text-[#303972]">232</h4>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <img src="@/assets/img/teachers.png" class="h-20" alt="image" />
        <div class="">
          <h3 class="text-md text-[#A098AE]">Ustozlar</h3>
          <h4 class="text-[36px] font-bold text-[#303972]">18</h4>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <img src="@/assets/img/equipments.png" class="h-20" alt="image" />
        <div class="">
          <h3 class="text-md text-[#A098AE]">Jihozlar</h3>
          <h4 class="text-[36px] font-bold text-[#303972]">36</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
