<script setup>
import { ref } from 'vue'
import { navLinks } from '../../constants/navLink'

const navlink = ref(navLinks)
</script>

<template>
  <div>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 md:w-64 lg:w-72 sm:w-20 h-screen pt-5 transition-transform -translate-x-full bg-[#4d44b5] sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full sm:pl-5 pb-4 overflow-y-auto bg-[#4d44b5]">
        <div class="">
          <img class="mx-auto md:h-28 sm:h-20 object-cover" src="@/assets/img/logo.png" alt="" />
        </div>
        <ul class="space-y-2 font-medium">
          <li v-for="link in navLinks" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center p-2.5 px-5 text-[#d8edf7] rounded-l-full hover:text-[#4d44b5] hover:bg-[#d8edf7] duration-200"
            >
              <i :title="link.title" :class="link.icon" class="text-xl"></i>
              <span class="md:ml-3 sm:m-0 md:block sm:hidden"> {{ link.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style>
.router-link-active {
  background: #d8edf7;
  color: #4d44b5;
  font-weight: bold;
}
</style>
