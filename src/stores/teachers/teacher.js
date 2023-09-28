import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTeacherStore = defineStore('teacher', () => {
  const teachers = reactive({
    data: [],
    load: false
  })

  const CREATE = (newData) => {
    teachers.data.push(newData)
  }

  const UPDATE = () => {}

  const DELETE = () => {}

  const GET = () => {}

  const GETONE = () => {}

  const DATA = computed(() => teachers.value)

  return { CREATE, UPDATE, DELETE, GET, GETONE, DATA }
})
