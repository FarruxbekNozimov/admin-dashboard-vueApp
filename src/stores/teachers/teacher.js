import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTeacher } from '@/service/teacher'

export const useTeacherStore = defineStore('teacher', () => {
  const teachers = reactive({
    data: [],
    load: true
  })

  const CREATE = (newData) => {
    teachers.data.push(newData)
  }

  const UPDATE = async () => {}

  const DELETE = async () => {}

  const GET = async () => {
    teachers.data = (await useTeacher.list()).data
    console.log(teachers.data)
    teachers.load = false
  }

  const GETONE = async () => {}

  const DATA = computed(async () => teachers.value)
  const LOAD = computed(async () => teachers.value)

  return { CREATE, UPDATE, DELETE, GET, GETONE, DATA, LOAD }
})
