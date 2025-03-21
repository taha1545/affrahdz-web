export default function Login() {
    return (
        <div className="h-screen w-full flex">
            <form className="w-1/2 h-full bg-white flex flex-col justify-center items-center px-12">

                <div className="w-full max-w-md">
                    <div className="mb-6 text-center">
                        <img src="/logo_ic.png" alt="Logo" className="h-16 mx-auto mb-2" />
                        <h3 className="text-2xl font-semibold text-gray-800">affrah dz</h3>
                        <p className="text-gray-500 text-sm">Sign in to use affrah dz</p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-right text-sm mt-1">
                            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                        </p>
                    </div>

                    <div className="mb-4 flex items-center">
                        <input type="checkbox" className="w-4 h-4 text-blue-500 border-gray-300 rounded" />
                        <label className="ml-2 text-sm text-gray-700">Remember me</label>
                    </div>

                    <div className="mb-4">
                        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                            Continue →
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-500">
                        Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Create account</a>
                    </p>
                </div>
            </form>

            <div className="w-1/2 h-full bg-gray-100"></div>
        </div>
    );
}
