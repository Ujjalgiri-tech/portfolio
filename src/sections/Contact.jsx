import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";     
import Connect from "../assets/Connect.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "budget" && value && !/^\d+$/.test(value)) return;

    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};

    required.forEach(
      (f) => !formData[f].trim() && (newErrors[f] = "Fill this field")
    );

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.service !== "other" && !formData.budget.trim()) {
      newErrors.budget = "Fill this field";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("Sending...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("Sent");

      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-gray-800 overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">

        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Connect}
            alt="Contact"
            className="w-72 md:w-[350px] rounded-2xl shadow-lg object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-900 p-6 rounded-xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-3 rounded bg-gray-700 outline-none"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 mb-3 rounded bg-gray-700 outline-none"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}


          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 mb-3 rounded bg-gray-700 outline-none"
          >
            <option value="">Select a Service</option>
            <option value="web">Website Development</option>
            <option value="app">App Development</option>
            <option value="design">UI/UX Design</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <p className="text-red-400 text-sm">{errors.service}</p>
          )}

          {formData.service !== "other" && (
            <>
              <input
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Your Budget (USD)"
                className="w-full p-3 mb-3 rounded bg-gray-700 outline-none"
              />
              {errors.budget && (
                <p className="text-red-400 text-sm">{errors.budget}</p>
              )}
            </>
          )}

          <textarea
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            placeholder="Your project idea..."
            rows="4"
            className="w-full p-3 mb-3 rounded bg-gray-700 outline-none"
          ></textarea>
          {errors.idea && (
            <p className="text-red-400 text-sm">{errors.idea}</p>
          )}

          {status && (
            <p
              className={`mt-2 text-center ${
                status === "Sent"
                  ? "text-green-400"
                  : status === "error"
                  ? "text-red-400"
                  : "text-yellow-300"
              }`}
            >
              {status}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 mt-4 p-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
