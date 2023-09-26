<script setup>
import { ref, onMounted } from 'vue'
import { navLinks } from '../../constants/navLink'
import { useRouter } from 'vue-router'

const navlink = ref(navLinks)

onMounted(() => {
  store.SET_USER()
})
</script>

<template>
  <div>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-blue-300 border-r border-gray-500 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div class="h-full pl-3 pb-4 overflow-y-auto bg-blue-300 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li v-for="link in navLinks" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center p-2.5 text-gray-900 rounded-l-full dark:text-white hover:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-700"
            >
              <i :title="link.title" :class="link.icon" class="text-xl"></i>
              <span class="ml-3">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style>
.router-link-active {
  background: blue;
  color: #fff;
  font-weight: bold;
}
</style>
