<script setup>
import SearchInput from '@/components/SearchInput.vue'
import AddButton from '@/components/Buttons/AddButton.vue'
import UserCards from '@/components/UserCards.vue'
</script>

<template>
  <div class="p-5">
    <div class="flex items-center justify-between mb-5">
      <SearchInput />
      <AddButton />
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 gap-5">
      <UserCards v-for="el in 10" />
    </div>
  </div>
</template>

<style scoped></style>
