import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useEquipments } from '@/service/equipments'

export const useEquipmentsStore = defineStore('equipments', () => {
  const teachers = reactive({
    data: [
      {
        id: 1,
        name: 'Trinajor runner',
        price: '130 $',
        brend: 'Doys Rong',
        info: 'Yugurish uchun',
        img: '@/assets/img/equip.png',
        count: '1'
      },
      {
        id: 1,
        name: 'Trinajor runner',
        price: '130 $',
        brend: 'Doys Rong',
        info: 'Yugurish uchun',
        img: '@/assets/img/equip.png',
        count: '1'
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
