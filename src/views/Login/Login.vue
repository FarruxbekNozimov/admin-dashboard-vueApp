<script setup>
import LoginRight from '@/views/Login/LoginRight.vue'
import { ref, reactive } from 'vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'

const user = reactive({
  email: '',
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
  <div class="flex items-center justify-normal">
    <LoginRight />
    <div class="flex items-center justify-center text-center bg-white h-screen w-1/2">
      <div class="w-96 text-start">
        <img src="@/assets/img/hi.png" class="" alt="" />
        <h3 class="text-[30px] font-bold">Welcome back!</h3>
        <p class="text-[16px] font-[400] mb-5">Please login to access your account.</p>
        <div class="mb-5">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900"
            >G-mail</label
          >
          <input
            type="email"
            id="email"
            class="bg-[#EAEAEA] border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 px-4 shadow"
            placeholder="Type your g-mail "
            v-model="user.email"
            required
          />
        </div>
        <div class="mb-5">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="bg-[#EAEAEA] border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 px-4 shadow"
            placeholder="Type your password "
            v-model="user.email"
            required
          />
        </div>
        <button class="block text-[#66BCE8] mb-5 text-sm hover:underline">Forgot Pasword?</button>
        <button class="bg-[#4C70FF] w-full p-2 text-white rounded-md">Log In</button>
      </div>
    </div>
  </div>
</template>

<style></style>
