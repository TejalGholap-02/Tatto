// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import ServerUrl from "../../core/constants/serverUrl.constant";
// import ApiService from "../../core/services/api.service";
// import { useAuth } from "../../core/contexts/AuthContext";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.email || !form.password) {
//       toast.error("Please enter email and password");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await new ApiService().apipost(ServerUrl.API_LOGIN, {
//         email: form.email,
//         password: form.password,
//       });

//       const { user, token } = response.data;
//       login({ user, token });
//       toast.success(`Welcome back, Admin!`);

//       navigate("/admin/dashboard", { replace: true });
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Login failed");
//     }
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

//       <input
//         name="email"
//         type="email"
//         placeholder="Admin Email"
//         value={form.email}
//         onChange={handleChange}
//         className="input"
//         required
//       />

//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//         className="input"
//         required
//       />

//       <button disabled={loading} type="submit" className="btn-primary">
//         {loading ? "Logging in..." : "Login"}
//       </button>
//     </form>
//   );
// }
