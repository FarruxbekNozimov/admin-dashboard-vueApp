import axios from "../axios";

export default async function getUser() {
	let token = localStorage.getItem("token");
	return await axios.post("/auth/getuser", { token });
}
