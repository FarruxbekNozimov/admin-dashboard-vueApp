<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
</script>

<template>
  <main>
    <section id="main" class="w-full h-[100vh] bg-[#d8edf7]">
      <Sidebar />
      <div class="lg:ml-72 md:ml-64 sm:ml-20 overflow-y-auto">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>

<style></style>
