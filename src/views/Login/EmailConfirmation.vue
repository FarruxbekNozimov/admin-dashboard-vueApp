<script setup>
import LoginRight from '@/views/Login/LoginRight.vue'
</script>

<template>
  <div class="flex items-center justify-normal">
    <LoginRight />
    <div class="flex items-center justify-center text-center bg-white h-screen w-1/2">
      <div class="w-[450px] text-start">
        <img src="@/assets/img/hi.png" class="" alt="" />
        <h3 class="text-[30px] font-bold">Second Step Verification</h3>
        <p class="text-md font-[400] mb-5 text-center">
          Enter the verification code we sent to <span class="text-[#4C70FF]">demo@gmail.com</span>
        </p>

        <div class="mb-5">
          <input
            type="password"
            id="password"
            class="bg-[#EAEAEA] border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 px-4 shadow"
            placeholder="Type code here "
            required
          />
        </div>
        <button class="block text-[#66BCE8] mb-5 text-sm hover:underline">Forgot Pasword?</button>
        <button class="bg-[#4C70FF] mb-5 w-full p-2 text-white rounded-md">Submit</button>
        <h3 class="text-center text-sm">
          Didn't get the code? <router-link to="/login" class="text-[#66BCE8]">Resend</router-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<style></style>
