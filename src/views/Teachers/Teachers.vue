<script setup>
import SearchInput from '@/components/SearchInput.vue'
import AddButton from '@/components/Buttons/AddButton.vue'
import UserCards from '@/components/UserCards.vue'
import AddTeacherForm from '@/components/AddTeacherForm.vue'
import { ref } from 'vue'

const isAddForm = ref(false)
const deleteId = ref(null)

const toggleAddForm = () => (isAddForm.value = !isAddForm.value)
const setDeleteId = (id) => (deleteId.value = id)
</script>

<template>
  <div class="p-5">
    <AddTeacherForm v-if="isAddForm" :funcForm="toggleAddForm" />
    <DeleteForm v-if="deleteId" :funcForm="toggleAddForm" />
    <div class="flex items-center justify-between mb-5">
      <SearchInput />
      <AddButton @click="toggleAddForm" />
    </div>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
      <UserCards v-for="el in 10" :data="el" :deleteFunc="setDeleteid" />
      
    </div>
  </div>
</template>

<style scoped></style>
