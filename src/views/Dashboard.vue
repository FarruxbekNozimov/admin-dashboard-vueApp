<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
import Rightbar from '../components/Rightbar/Rightbar.vue'
import Header from '@/components/Header/Header.vue'
import { useRightbarStore } from '@/stores/rightbar'
const rightbar = useRightbarStore()
</script>

<template>
  <main class="relative bg-[#d8edf7] w-full h-screen overflow-x-hidden">
    <Sidebar />
    <div class="lg:ml-72 md:ml-64 sm:ml-20">
      <Header />
    </div>
    <div class="lg:ml-72 md:ml-64 sm:ml-20">
      <router-view></router-view>
      <Rightbar />
    </div>
  </main>
</template>

<style></style>
