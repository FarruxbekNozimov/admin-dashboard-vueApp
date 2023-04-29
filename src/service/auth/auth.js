import axios from "../axios";

export const AUTH = {
	LOGIN: async (params) => {
		return await axios.post("/auth/login", params);
	},
};
