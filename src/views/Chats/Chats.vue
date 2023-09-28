<script setup>
import Message from '@/components/Message.vue'
import ChatAvatar from '@/components/ChatAvatar.vue'
import { useChatsStore } from '../../stores/chats/chats'
import { ref } from 'vue'
const chats_store = useChatsStore()

const file = ref(null)
const selectedFileUrl = ref(null)

const resetImages = () => {
  file.value = null
  selectedFileUrl.value = null
}

const getFile = (e) => {
  const selectedFile = e.target.files[0]
  const fileUrl = URL.createObjectURL(selectedFile)

  selectedFileUrl.value = fileUrl

  if (selectedFile) {
    console.log('Selected File:', selectedFile)
  } else {
    console.error('No file selected.')
  }
}
</script>

<template>
  <div class="flex gap-5 p-5">
    <div class="w-80 max-h-[82vh] overflow-y-auto p-2">
      <ChatAvatar v-for="el in 5" />
    </div>
    <div class="w-2/3 h-[80vh]">
      <div class="bg-[#EAECF0] border border-[#4D44B5]/50 rounded-xl overflow-y-auto h-[70vh] p-5">
        <Message v-for="el in chats_store.DATA" :data="el" />
      </div>
      <div class="relative h-[10vh] pt-3">
        <textarea
          type="text"
          class="h-full w-full rounded-xl shadow outline-none px-3 border border-[#4D44B5]/50 py-3 focus:shadow-2xl"
        />
        <div
          v-if="selectedFileUrl"
          class="bg-white rounded-xl w-full absolute bottom-14 border border-[#4D44B5]/50 p-2 flex items-center"
        >
          <div class="relative">
            <img
              :src="selectedFileUrl"
              class="h-40 object-cover rounded-lg border border-[#4D44B5]/50"
              alt=""
            />
            <button
              @click="resetImages"
              class="bg-black/50 hover:bg-black/80 h-8 w-8 flex items-center justify-center rounded-full text-white top-1 right-2 absolute"
            >
              <i class="bx bx-x text-2xl"></i>
            </button>
          </div>
        </div>
        <button class="absolute right-32 bottom-3 text-3xl flex items-start justify-center">
          <label for="file" class="flex items-center justify-center cursor-pointer">
            <i class="bx bx-paperclip -rotate-45 text-gray-500"></i>
          </label>
          <input type="file" @change="(e) => getFile(e)" id="file" class="hidden" />
        </button>
        <button
          class="absolute right-5 bottom-2 p-2 px-5 rounded-full text-white flex items-center justify-center gap-2 bg-[#4D44B5] hover:bg-[#4D44B5]/90"
        >
          Send <i class="bx bx-send"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
