<script setup>
defineProps(['funcForm'])
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-50 overflow-y-auto">
    <div class="mx-auto mt-5 lg:w-3/5 md:w-5/6 w-[98%] bg-white rounded-xl">
      <div
        class="bg-[#4D44B5] w-full px-10 p-5 font-semibold flex items-center justify-between rounded-t-xl"
      >
        <span class="text-white text-xl">Ustozi ma'lumotlari</span>
        <button @click="funcForm">
          <i class="bx bx-x text-white text-3xl cursor-pointer"></i>
        </button>
      </div>
      <div class="px-10 py-5">
        <div class="flex justify-between gap-5 mb-5">
          <div class="w-1/2">
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900"
              >I.F.SH *</label
            >
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="Maria"
              required
            />
          </div>
          <div class="w-1/2">
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900"
              >Tug'ilgan sanasi *</label
            >
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="Historia"
              required
            />
          </div>
        </div>
        <div class="flex justify-between gap-5 mb-5">
          <div class="w-1/2">
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900"
              >Telefon raqami *</label
            >
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="+998941234567"
              required
            />
          </div>
          <div class="w-1/2">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">
              Toifa *
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none"
            >
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
            </select>
          </div>
        </div>
        <div class="flex justify-between gap-5 mb-5">
          <div class="w-1/2">
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900"
              >Ma'lumot *</label
            >
            <textarea
              id="last_name"
              class="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="Qisqacha ma'lumot"
              required
            />
          </div>
          <div class="w-1/2">
            <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input"
              >Rasmi *</label
            >

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <i class="bx bx-cloud-upload"></i>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 1MB)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div class="flex justify-between gap-5 mb-5">
          <div class="w-1/2">
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900"
              >Gmail *</label
            >
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="demo@gmail.com"
              required
            />
          </div>
          <div class="w-1/2">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">
              Jinsi *
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 outline-none"
            >
              <option class="male">Erkak</option>
              <option class="female">Ayol</option>
            </select>
          </div>
        </div>
        <div class="flex items-center justify-end gap-5">
          <button
            class="border text-sm text-[#4D44B5] border-[#4D44B5] p-2 px-4 rounded-full shadow-xl"
          >
            Saqlash
          </button>
          <button class="border bg-[#4D44B5] text-white p-2 px-4 rounded-full shadow-xl text-sm">
            Qo'shish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
