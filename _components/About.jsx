export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Anandbhoj
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing happiness through food to those who need it most
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Anandbhoj is dedicated to serving free, nutritious meals to the
              underprivileged community in Jamshedpur. Every Tuesday, we come
              together as volunteers to prepare and distribute food with love
              and compassion.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our initiative started with the simple belief that no one should
              go hungry. We strive to create a community where everyone has
              access to a warm meal and experiences the joy of sharing.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Meals Served Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600">Volunteers</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Every Tuesday
            </h3>
            <p className="text-gray-600 mb-4">
              Join us every Tuesday from 6:00 PM to 9:00 PM as we serve freshly
              prepared meals to our community.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Fresh, home-cooked meals</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  Served with love and respect
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Open to all in need</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Located in Jamshedpur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
