import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SignupPage() {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 px-4 sm:px-8 py-10 overflow-hidden"
            style={{ transformOrigin: "center" }}
        >
            {/* Left Side Text */}
            <div className="mt-10 w-full md:w-1/2 max-w-xl text-white text-center md:text-left mb-10 md:mb-0 md:mr-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                    Create an account!
                </h1>
                <p className="text-base sm:text-lg leading-relaxed drop-shadow-md">
                    Join the sApp community today by creating your account. Unlock full access to our powerful features and start enhancing your experience right away!
                </p>
            </div>

            {/* Right Side Form */}
            <div className="w-full md:w-[400px] bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 mx-4 sm:mx-6 md:mx-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Sign Up</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                    Fill all fields so we can get some info about you. We'll never send you spam.
                </p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    <Link to="/signuppage">
                        <button
                            type="button"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold w-full py-3 rounded-full shadow-lg transition-all"
                        >
                            Sign Up →
                        </button>
                    </Link>
                </form>

                <div className="mt-4 flex items-start text-sm text-gray-500">
                    <input type="checkbox" className="mr-2 mt-1" />
                    <span>
                        By signing up, you accept our{' '}
                        <a href="#" className="text-purple-600 underline">Terms</a> &{' '}
                        <a href="#" className="text-purple-600 underline">Privacy Policy</a>.
                    </span>
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="#" className="text-purple-600 underline">Sign In</a>
                </p>
            </div>
        </motion.div>
    );
}
