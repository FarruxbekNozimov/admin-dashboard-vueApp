<script setup></script>

<template>
  <div class="p-5">
    <div class="p-5 bg-white rounded-xl shadow-md grid lg:grid-cols-4 grid-cols-2 mb-5">
      <div class="flex items-center justify-center gap-5">
        <img src="@/assets/img/barbell.png" class="h-20" alt="image" />
        <div class="">
          <h3 class="text-md text-[#A098AE]">Mahsulotlar</h3>
          <h4 class="text-[36px] font-bold text-[#303972]">341</h4>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <img src="@/assets/img/clients.png" class="h-20" alt="image" />
        <div class="">
          <h3 class="text-md text-[#A098AE]">Mijozlar</h3>
          <h4 class="text-[36px] font-bold text-[#303972]">232</h4>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <img src="@/assets/img/teachers.png" class="h-20" alt="image" />
        <div class="">
          <h3 class="text-md text-[#A098AE]">Ustozlar</h3>
          <h4 class="text-[36px] font-bold text-[#303972]">18</h4>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <img src="@/assets/img/equipments.png" class="h-20" alt="image" />
        <div class="">
          <h3 class="text-md text-[#A098AE]">Jihozlar</h3>
          <h4 class="text-[36px] font-bold text-[#303972]">36</h4>
        </div>
      </div>
    </div>
    <div class="relative overflow-x-auto rounded-xl shadow-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-lg text-white uppercase bg-[#4D44B5]">
          <tr>
            <th scope="col" class="px-7 py-4">Ustozlar</th>
            <th scope="col" class="px-7 py-4"></th>
            <th scope="col" class="px-7 py-4"></th>
            <th scope="col" class="px-7 py-4"></th>
            <th scope="col" class="px-7 py-4 sr-only">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in 3" class="bg-white border-b">
            <th scope="row" class="px-7 py-4 flex items-center gap-3">
              <img
                src="https://yaaz.az/wp-content/uploads/2016/10/halid-bin-valid.jpg"
                class="h-14 w-14 rounded-full border"
                alt=""
              />
              <div class="">
                <h3 class="text-[#101828] font-[700] text-[15px]">Asilbek Abudullayev</h3>
              </div>
            </th>
            <td class="px-7 py-4 text-[#232D42]">ID 123456789</td>
            <td class="px-7 py-4">
              <div class="flex items-center justify-center gap-2">
                <i
                  class="bx bx-user text-xl bg-orange-500 h-10 w-10 flex items-center justify-center text-white rounded-full"
                ></i>
                <div class="">
                  <h3>Toifa</h3>
                  <h3 class="text-[#232D42] text-lg">I</h3>
                </div>
              </div>
            </td>
            <td class="px-7 py-4">
              <button class="w-full bg-[#5D5FEF] p-2 rounded-full text-[#FCC43E] font-bold">
                Du Se Chor
              </button>
            </td>
            <td class="px-7 py-4">
              <div class="flex items-center justify-center gap-3">
                <i class="bx bx-trash text-gray-500 text-xl"></i>
                <i class="bx bx-pencil text-gray-500 text-xl"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
