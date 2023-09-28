import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTeacher } from '@/service/teacher'

export const useTeacherStore = defineStore('teacher', () => {
  const teachers = reactive({
    data: [
      {
        fullName: 'Toshmatov Eshmat',
        birthday: '2021',
        phoneNumber: '+998887038006',
        email: 'example@gmail.com',
        gender: 'male',
        type: 'I'
      },
      {
        fullName: 'Ali AbuTolib',
        birthday: '',
        phoneNumber: '+998887038006',
        email: 'example@gmail.com',
        gender: 'male',
        type: 'IV'
      }
    ],
    load: true
  })

  const CREATE = (newData) => {
    // teachers.data.push(newData)
  }

  const UPDATE = async () => {}

  const DELETE = async () => {}

  const GET = async () => {
    console.log(teachers.data)
    // teachers.data = (await useTeacher.list()).data
    // console.log(teachers.data)
    // teachers.load = false
  }

  const GETONE = async () => {}

  const DATA = computed(() => teachers.data)
  const LOAD = computed(() => teachers.load)

  return { CREATE, UPDATE, DELETE, GET, GETONE, DATA, LOAD }
})
