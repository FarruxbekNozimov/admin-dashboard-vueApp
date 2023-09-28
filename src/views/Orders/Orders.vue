<script setup>
import { ref, onMounted } from 'vue'

import SearchInput from '@/components/SearchInput.vue'
import Loading from '@/components/Loading.vue'
import AddButton from '@/components/Buttons/AddButton.vue'
import Pagination from '@/components/Pagination.vue'
import AddClientForm from '@/components/AddClientForm.vue'
import { useTeacherStore } from '@/stores/teachers/teacher'

const teacher_store = useTeacherStore()
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
    <AddClientForm v-if="isAddForm" :funcForm="toggleAddForm" />
    <DeleteForm v-if="deleteId" :funcForm="toggleAddForm" />
    <div class="flex items-center justify-between mb-5">
      <SearchInput />
      <AddButton @click="toggleAddForm" />
    </div>
    <!-- <Loading v-if="teacher_store.LOAD" /> -->
    <div class="">
      <h3 v-if="!teacher_store.DATA.length" class="text-5xl w-full text-center py-20 text-gray-400">
        Hech qanday ma'lumot topilmadi 🤷‍♂️
        {{ teacher_store.DATA }}
      </h3>
      <div class="relative overflow-x-auto rounded-xl shadow-lg">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-sm text-white uppercase bg-[#4D44B5]">
            <tr>
              <th scope="col" class="px-7 py-4">I.F.SH</th>
              <th scope="col" class="px-7 py-4">ID</th>
              <th scope="col" class="px-7 py-4">Ustoz</th>
              <th scope="col" class="px-7 py-4">Boshladi</th>
              <th scope="col" class="px-7 py-4">Muddati</th>
              <th scope="col" class="px-7 py-4 sr-only">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th scope="row" class="px-7 py-4 flex items-center gap-3">
                <img
                  src="https://yaaz.az/wp-content/uploads/2016/10/halid-bin-valid.jpg"
                  class="h-14 w-14 rounded-full border"
                  alt=""
                />
                <div class="">
                  <h3 class="text-[#101828] font-[700] text-[15px]">John Doe</h3>
                  <h3 class="text-[#667085] text-sm">+998941234567</h3>
                </div>
              </th>
              <td class="px-7 py-4 text-[#232D42]">1234567</td>
              <td class="px-7 py-4">Mirzaev Mirkomil</td>
              <td class="px-7 py-4">2023.04.01</td>
              <td class="px-7 py-4">3</td>
              <td class="px-7 py-4">
                <div class="flex items-center justify-center gap-3">
                  <i class="bx bx-trash text-gray-500 text-xl"></i>
                  <i class="bx bx-pencil text-gray-500 text-xl"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <Pagination />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
