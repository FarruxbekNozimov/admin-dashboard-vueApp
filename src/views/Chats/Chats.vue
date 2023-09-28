<script setup></script>

<template>
  <div class="flex gap-5 p-5">
    <div class="w-80 max-h-[82vh] overflow-y-auto p-2">
      <div
        v-for="el in 5"
        class="mb-3 flex items-center gap-3 cursor-pointer shadow-lg rounded-xl bg-white p-3"
      >
        <img src="@/assets/img/xolid.png" class="h-16 w-16 object-cover rounded-full" alt="" />
        <div class="">
          <h3 class="font-bold text-sm">Holid ibn Valid</h3>
          <p class="text-sm text-gray-600">Assalomu alaykum 👋</p>
        </div>
      </div>
    </div>
    <div class="w-2/3 h-[80vh]">
      <div class="bg-[#EAECF0] border border-[#303972]/50 rounded-xl overflow-y-auto h-[70vh] p-5">
        asd
      </div>
      <div class="h-[10vh]"></div>
    </div>
  </div>
</template>

<style scoped></style>
