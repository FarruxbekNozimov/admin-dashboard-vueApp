<script>
import { users } from "../../constants/user";

export default {
	data() {
		return {
			users: users,
		};
	},
	components: {},
};
</script>

<template>
	<div class="m-2">
		<div
			class="flex justify-between border-b-2 border-slate-400 rounded-lg mb-5 pb-5">
			<h2 class="text-2xl font-bold">Students List</h2>
			<button
				class="bg-[#FEAF00] px-6 text-white pt-2 pb-2 rounded-md flex justify-center items-center hover:bg-yellow-400 duration-300">
				<i class="bx bx-plus-medical me-2 text-xl"></i> ADD NEW STUDENT
			</button>
		</div>
		<table class="w-full bg-yellow-100 rounded-2xl">
			<thead>
				<tr>
					<th class="p-3 text-slate-600"></th>
					<th class="p-3 text-slate-600">Name</th>
					<th class="p-3 text-slate-600">Email</th>
					<th class="p-3 text-slate-600">Phone</th>
					<th class="p-3 text-slate-600">Enroll Number</th>
					<th class="p-3 text-slate-600">Date of admission</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="border-t-2 border-yellow-500 hover:bg-yellow-400 cursor-pointer duration-300 rounded-2xl"
					v-for="el in users">
					<td class="p-3">
						<img
							src="../../assets/avatar.jpg"
							alt=""
							class="h-[60px] mx-auto rounded-lg" />
					</td>
					<td class="p-3">{{ el.name }}</td>
					<td class="p-3">{{ el.email }}</td>
					<td class="p-3">{{ el.phone }}</td>
					<td class="p-3">{{ el.enroll }}</td>
					<td class="p-3">{{ el.date }}</td>
					<td class="p-3">
						<i
							class="text-3xl text-green-700 hover:scale-125 duration-300 bx bx-edit-alt"></i>
					</td>
					<td class="p-3">
						<i
							class="text-3xl text-red-700 hover:scale-125 duration-300 bx bxs-trash"></i>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style></style>
