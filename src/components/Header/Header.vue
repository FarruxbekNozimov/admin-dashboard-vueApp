<script setup>
import { useRoute } from 'vue-router'
import { useRightbarStore } from '@/stores/rightbar'
import SearchInput from '@/components/SearchInput.vue'

const rightbar = useRightbarStore()
const route = useRoute()
</script>

<template>
  <div>
    <nav class="w-full h-20">
      <div class="p-5">
        <div class="flex items-center justify-between gap-5 w-full">
          <span class="self-center font-bold text-3xl whitespace-nowrap text-[#303972]">
            {{ route.name }}
          </span>
          <div class="z-10 flex items-center justify-center gap-7">
            <SearchInput :class="route.name == 'Dashboard' ? 'sm:hidden lg:block' : 'hidden'" />
            <div class="flex items-center justify-center gap-3">
              <button
                class="relative bg-white text-gray-500 hover:shadow-lg h-12 w-12 rounded-full text-2xl flex items-center justify-center group"
                @click="rightbar.toggleRightbar"
              >
                <i class="bx bx-bell"></i>
                <span class="h-2 w-2 top-1 right-1 rounded-full absolute bg-[#4D44B5]"></span>
              </button>
              <button
                class="bg-white text-gray-500 hover:shadow-lg h-12 w-12 rounded-full text-2xl flex items-center justify-center"
              >
                <i class="bx bx-cog"></i>
              </button>
            </div>
            <div class="cursor-pointer flex items-center justify-center gap-3">
              <div class="text-center sm:hidden lg:block">
                <h3 class="text-[#303972] font-[600] text-[14px]">Ochilov .M</h3>
                <h4 class="text-[#A098AE] font-[400] text-[14px]">Admin</h4>
              </div>
              <img
                class="h-14 w-14 rounded-full object-cover border border-[#303972]"
                src="https://img.freepik.com/premium-vector/arabic-man-icon-muslim-person-flat-avatar-isolated-white-background_53562-14229.jpg?w=2000"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
