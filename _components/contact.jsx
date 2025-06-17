export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Want to volunteer, donate, or learn more about our mission? We'd
            love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us for any questions or to get involved
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">Jamshedpur, Jharkhand, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Service Days
                  </h4>
                  <p className="text-gray-600">Every Tuesday</p>
                  <p className="text-gray-600">6:00 PM - 9:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    How to Help
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Volunteer with us on Tuesdays</li>
                    <li>• Donate food items or funds</li>
                    <li>• Spread awareness about our cause</li>
                    <li>• Sponsor a meal or event</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
