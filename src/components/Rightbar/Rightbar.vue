<script setup>
import { useRightbarStore } from '@/stores/rightbar'
const rightbar = useRightbarStore()
</script>

<template>
  <div
    class="absolute duration-300 top-0 h-full w-80 pt-24 px-5 bg-white shadow-xl"
    :class="rightbar.RIGHTBAR ? 'right-0' : '-right-80'"
  >
    <h3 class="text-lg font-semibold text-[#303972] mb-5">Xabarlar</h3>
    <ul>
      <li
        class="relative flex items-center gap-3 border-b border-gray-400 pb-3 mb-5"
        v-for="el in 3"
      >
        <img
          class="h-10 w-10 rounded-full object-cover"
          src="https://img.freepik.com/premium-vector/arabic-man-icon-muslim-person-flat-avatar-isolated-white-background_53562-14229.jpg?w=2000"
          alt=""
        />
        <div class="">
          <h3 class="text-[#303972] text-sm font-[600]">Salimjon Sheraliyev</h3>
          <p class="whitespace-nowrap text-[#A098AE] text-sm font-[400]">
            Lorem ipsum dolor sit amet...
          </p>
        </div>
        <span class="absolute top-0 right-0 text-xs text-[#A098AE]">12:45 PM</span>
      </li>
    </ul>
    <button
      class="bg-gray-200 hover:bg-gray-300 duration-200 text-[#303972] font-semibold w-full p-3 rounded-full"
    >
      Barchasi
    </button>
  </div>
</template>

<style scoped></style>
