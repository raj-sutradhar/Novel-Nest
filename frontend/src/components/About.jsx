import Navbar from "../components/Navbar"; // Import your existing Navbar component
import { Link } from "react-router-dom";
import book from "/book.png";
import community from "/community.jpg";
import growth from "/growth.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="text-center mt-10 pt-30 pb-2">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Discover, Learn & Grow 📖✨
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
          Welcome to{" "}
          <span className="text-pink-500 font-semibold">Novel Nest</span> –
          where knowledge meets passion!
        </p>
      </header>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <section className="space-y-12">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-pink-500">
                📚 A World of Books
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Dive into a vast collection of books covering various genres,
                from fiction to self-improvement.
              </p>
            </div>
            <img
              src={book}
              alt="Books"
              className="rounded-lg md:w-1/3 mt-4 md:mt-0"
            />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-pink-500">
                🌍 Join Our Community
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Connect with like-minded readers, share insights, and
                participate in interactive discussions.
              </p>
            </div>
            <img
              src={community}
              alt="Community"
              className="rounded-lg md:w-1/3 mt-4 md:mt-0"
            />
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-pink-500">
                🚀 Empower Yourself
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Access resources to enhance your knowledge and personal growth
                through curated content.
              </p>
            </div>
            <img
              src={growth}
              alt="Growth"
              className="rounded-lg md:w-1/3 mt-4 md:mt-0"
            />
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-pink-600 transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-6 mt-12 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
        © 2025 Novel Nest | All Rights Reserved
      </footer>
    </div>
  );
}
