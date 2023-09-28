import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTeacher } from '@/service/teacher'

export const useChatsStore = defineStore('chats', () => {
  const chats = reactive({
    data: [
      {
        text: 'Assalomu alaykum yaxshimisiz ?',
        mine: '1',
        images: [
          'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
        ],
        sended: '12:40'
      },
      {
        text: 'Yaxshi rahmat o`zingizchi ?',
        mine: '0',
        images: [],
        sended: '12:40'
      }
    ],
    load: true
  })

  const CREATE = (newData) => {
    // chats.data.push(newData)
  }

  const UPDATE = async () => {}

  const DELETE = async () => {}

  const GET = async () => {
    // chats.data = (await useTeacher.list()).data
    // console.log(chats.data)
    // chats.load = false
  }

  const GETONE = async () => {}

  const DATA = computed(() => chats.data)
  const LOAD = computed(() => chats.load)

  return { CREATE, UPDATE, DELETE, GET, GETONE, DATA, LOAD }
})
