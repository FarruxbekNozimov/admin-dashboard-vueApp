<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
import Header from '../components/Header/Header.vue'
</script>

<template>
  <main>
    <section id="main" class="w-full h-[100vh] dark:bg-gray-950">
      <Header />
      <Sidebar />

      <div class="p-4 sm:ml-64">
        <div
          class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 shadow-lg shadow-gray-800 h-[85vh] overflow-y-auto"
        >
          <router-view></router-view>
        </div>
      </div>
    </section>
  </main>
</template>

<style></style>
