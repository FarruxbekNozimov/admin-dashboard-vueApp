<script>
import { payments } from "../../constants/payments";

export default {
	data() {
		return {
			payments: payments,
		};
	},
	components: {},
};
</script>

<template>
	<div class="m-2">
		<div
			class="flex justify-between border-b-2 border-slate-400 rounded-lg mb-5 pb-5">
			<h2 class="text-2xl font-bold">Payment Details</h2>
			<button class="bg-[#FEAF00] px-6 text-white pt-2 pb-2 rounded-md">
				ADD NEW STUDENT
			</button>
		</div>
		<table class="w-full bg-yellow-100 rounded-2xl">
			<thead>
				<tr>
					<th class="p-3 text-slate-600"></th>
					<th class="p-3 text-slate-600">Name</th>
					<th class="p-3 text-slate-600">Payment Schedule</th>
					<th class="p-3 text-slate-600">Bill Number</th>
					<th class="p-3 text-slate-600">Amount Paid</th>
					<th class="p-3 text-slate-600">Balance amount</th>
					<th class="p-3 text-slate-600">Date</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="border-t-2 border-yellow-500 hover:bg-yellow-700 cursor-pointer duration-300 rounded-2xl"
					v-for="el in payments">
					<td class="p-3">
						<img
							src="../../assets/avatar.jpg"
							alt=""
							class="h-[60px] mx-auto rounded-lg" />
					</td>
					<td class="p-3">{{ el.name }}</td>
					<td class="p-3">{{ el.payment }}</td>
					<td class="p-3">{{ el.bill }}</td>
					<td class="p-3">{{ el.amount }}</td>
					<td class="p-3">{{ el.balance }}</td>
					<td class="p-3">{{ el.date }}</td>
					<td class="p-3">
						<i
							class="text-3xl text-yellow-500 hover:scale-125 duration-300 bx bxs-detail"></i>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style></style>
