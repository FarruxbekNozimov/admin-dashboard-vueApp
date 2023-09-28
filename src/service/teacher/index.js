import axios from '../axios'

export const useTeacher = {
  list: async () => await axios.get('/teacher'),
  create: async (state) => await axios.post('/teacher', state),
  update: async (id, state) => await axios.put(`/teacher/${id}`, state),
  delete: async (id) => await axios.put(`/teacher/${id}`, {})
}
