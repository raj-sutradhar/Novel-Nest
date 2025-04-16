import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaCommentDots, FaTimes } from "react-icons/fa";

export default function Contact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Message:", data);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-6">
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 text-gray-900 dark:text-white">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition duration-300"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 pl-10 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring focus:ring-pink-400 outline-none"
                placeholder="Enter your name"
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 pl-10 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring focus:ring-pink-400 outline-none"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Your Message
            </label>
            <div className="relative">
              <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
              <textarea
                {...register("message", {
                  required: "Message cannot be empty",
                })}
                className="w-full p-3 pl-10 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring focus:ring-pink-400 outline-none"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
