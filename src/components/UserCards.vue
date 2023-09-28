<script setup></script>

<template>
  <div class="bg-white rounded-xl py-5 relative text-center">
    <button class="text-gray-500 text-lg absolute top-2 right-10">
      <i class="bx bx-pencil"></i>
    </button>
    <button class="text-gray-500 text-lg absolute top-2 right-2">
      <i class="bx bx-trash"></i>
    </button>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbhk5N2f5z5F3ubhn6aWM4TUzxceKsa0RIg&usqp=CAU"
      class="h-20 w-20 rounded-full mx-auto border border-[#4D44B5] mb-3"
      alt="avatar"
    />
    <h3 class="text-[#303972] font-[600] text-md">Mirzaev Mirkomil</h3>
    <h4 class="text-[#4D44B5] text-sm">ID 123456789</h4>
    <div class="flex items-center justify-between px-5 mt-5">
      <div class="flex items-center gap-2">
        <i
          class="bx bx-user w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white"
        ></i>
        <div class="text-start">
          <h3 class="text-sm text-gray-500">Toifa</h3>
          <h4 class="text-xs text-[#303972] font-bold">IV</h4>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <i
          class="bx bx-calendar-alt w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white"
        ></i>
        <div class="text-start">
          <h3 class="text-sm text-gray-500">Kuni</h3>
          <h4 class="text-xs text-[#303972] font-bold">Juft</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
