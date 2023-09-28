import axios from '../axios'

export const useEquipments = {
  list: async () => await axios.get('/equipments'),
  create: async (state) => await axios.post('/equipments', state),
  update: async (id, state) => await axios.put(`/equipments/${id}`, state),
  delete: async (id) => await axios.put(`/equipments/${id}`, {})
}
