<script setup>
import { ref, reactive } from 'vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'

const user = reactive({
  login: '',
  password: ''
})
const router = useRouter()

// const useLogin = () => {
//   const senUser = {
//     login: user.login,
//     password: user.password
//   }
//   useAuth
//     .LOGIN(senUser)
//     .then((res) => {
//       localStorage.setItem('token', res?.data?.tokens.access_token)
//       router.push('/')
//       toast.success('Successfully Logged in', {
//         autoClose: 1000,
//         theme: 'light'
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//       toast.error(`Error`, {
//         autoClose: 1000,
//         theme: 'auto'
//       })
//     })
// }
</script>

<template>
  <!-- component -->
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-bold text-center uppercase">MegaCRM Login</h1>
          </div>
          <form @submit.prevent="useLogin" class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer w-[300px]"
                  placeholder=" "
                  required
                  v-model="user.login"
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Login</label
                >
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer w-[300px]"
                  placeholder=" "
                  required
                  v-model="user.password"
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Password</label
                >
              </div>
              <div class="relative">
                <button
                  class="w-full mt-5 hover:bg-blue-600 bg-blue-500 text-white rounded-md px-2 py-1 font-medium"
                >
                  SIGN IN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
