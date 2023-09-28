<script setup>
defineProps(['data'])
</script>

<template>
  <div class="flex items-center mb-5" :class="data.mine == '1' ? 'justify-start' : 'justify-end'">
    <div
      class="relative bg-white shadow-lg rounded-xl p-2 px-5 pb-3 pr-14"
      :class="data.mine == '1' ? 'rounded-bl-none' : 'rounded-br-none'"
    >
      <div v-if="data.images.length" class="flex gap-2 mb-3">
        <img v-for="img in data.images" :src="img" class="h-20 rounded-lg" alt="image" />
      </div>
      {{ data.text }}
      <span class="absolute right-3 bottom-1 text-gray-500 text-xs">12:40</span>
    </div>
  </div>
</template>

<style scoped></style>
