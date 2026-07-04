// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import ServerUrl from "../../core/constants/serverUrl.constant";
// import ApiService from "../../core/services/api.service";

// export default function Signup() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!form.email) newErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       newErrors.email = "Invalid email format";

//     if (!form.password) newErrors.password = "Password is required";
//     else if (form.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     if (form.password !== form.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       await new ApiService().apipost(ServerUrl.API_REGISTER, {
//         email: form.email,
//         password: form.password,
//         role: "admin", // Always admin role for your use case
//       });
//       toast.success("Signup successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Signup failed");
//     }
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="signup-form">
//       <h2 className="text-2xl font-bold mb-4">Admin Signup</h2>

//       <input
//         name="email"
//         type="email"
//         placeholder="Admin Email"
//         value={form.email}
//         onChange={handleChange}
//         className="input"
//         required
//       />
//       {errors.email && <p className="error">{errors.email}</p>}

//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//         className="input"
//         required
//       />
//       {errors.password && <p className="error">{errors.password}</p>}

//       <input
//         name="confirmPassword"
//         type="password"
//         placeholder="Confirm Password"
//         value={form.confirmPassword}
//         onChange={handleChange}
//         className="input"
//         required
//       />
//       {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

//       <button disabled={loading} type="submit" className="btn-primary">
//         {loading ? "Processing..." : "Signup"}
//       </button>
//     </form>
//   );
// }
