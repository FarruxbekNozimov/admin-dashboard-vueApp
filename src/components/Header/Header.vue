<script setup></script>

<template>
  <div>
    <nav class="w-full h-20">
      <div class="p-5">
        <div class="flex items-center justify-between w-full">
          <span class="self-center font-semibold text-3xl whitespace-nowrap text-[#303972]">
            Dashboard
          </span>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <i class="bx bx-search text-lg text-[#4D44B5]"></i>
            </div>
            <input
              type="search"
              class="block w-72 p-3 pl-10 text-sm text-gray-900 border rounded-full bg-gray-50 outline-none"
              placeholder="Izlash"
            />
          </div>
          <div class="">
            <button><i class="bx bx-cog"></i></button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
