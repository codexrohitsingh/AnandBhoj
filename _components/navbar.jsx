export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-16 items-center">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-red-600">AnandBhoj</div>
            <span className="text-sm text-gray-500 hidden sm:inline">
              (Jamshedpur)
            </span>
          </div>

          {/* Nav Links */}
          {/* <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-red-600 transition">
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition">
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition">
              Contact
            </a>
          </div> */}

          {/* Special Tuesday Banner */}
          <div className="hidden lg:block">
            <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-semibold">
              🎉 Free Food Every Tuesday!
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
