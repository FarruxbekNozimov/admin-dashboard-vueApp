<script setup>
import { ref, onMounted } from 'vue'

import SearchInput from '@/components/SearchInput.vue'
import Loading from '@/components/Loading.vue'
import AddButton from '@/components/Buttons/AddButton.vue'
import EquipmentsCards from '@/components/EquipmentsCards.vue'
import AddEquipmentForm from '@/components/AddEquipmentForm.vue'
import { useEquipmentsStore } from '@/stores/equipments/equipments'

const teacher_store = useEquipmentsStore()
const isAddForm = ref(false)
const deleteId = ref(null)

const toggleAddForm = () => (isAddForm.value = !isAddForm.value)
const setDeleteId = (id) => (deleteId.value = id)

onMounted(async () => {
  await teacher_store.GET()
})
</script>

<template>
  <div class="p-5">
    <AddEquipmentForm v-if="isAddForm" :funcForm="toggleAddForm" />
    <DeleteForm v-if="deleteId" :funcForm="toggleAddForm" />
    <div class="flex items-center justify-between mb-5">
      <SearchInput />
      <AddButton @click="toggleAddForm" />
    </div>
    <!-- <Loading v-if="teacher_store.LOAD" /> -->
    <div class="">
      <h3 v-if="!teacher_store.DATA.length" class="text-5xl w-full text-center py-20 text-gray-400">
        Hali ma'lumot qo'shilmagan 🤷‍♂️
      </h3>
      <div v-else class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        <EquipmentsCards v-for="el in teacher_store.DATA" :data="el" :deleteFunc="setDeleteid" />
        <Pagination />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
