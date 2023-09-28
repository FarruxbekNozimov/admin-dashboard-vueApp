<script setup>
defineProps(['deleteFunc', 'data'])
import { ref } from 'vue'

const infoId = ref(null)
</script>

<template>
  <div
    class="cursor-pointer hover:shadow-xl duration-300 bg-[#4D44B5]/30 rounded-xl relative text-center py-5 px-3"
  >
    <div class="relative bg-white mb-5 rounded-xl border border-[#4D44B5] pt-7">
      <button class="text-gray-500 text-xl absolute top-1 right-10">
        <i class="bx bx-pencil"></i>
      </button>
      <button
        @click="() => deleteFunc(data.id)"
        class="text-gray-500 text-xl absolute top-1 right-1"
      >
        <i class="bx bx-trash"></i>
      </button>
      <img src="@/assets/img/equip.png" class="w-full rounded-xl mx-auto" alt="avatar" />
    </div>
    <div class="flex items-center justify-between">
      <span class="text-[#303972] font-[600] text-sm">{{ data.name }}</span>
      <span class="text-[#C11030] text-sm font-semibold">{{ data.brend }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-[#5C63A3] font-[600] text-sm">{{ data.info }}</span>
      <span class="text-[#1128FA] text-sm font-bold">{{ data.price }}</span>
    </div>
  </div>
</template>

<style scoped></style>
