import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-blue-500">FreelancerHub</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Connect with top clients and freelancers worldwide. Start your journey
          today.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">
            Explore Projects
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded shadow-md hover:bg-gray-200">
            Learn More
          </button>
        </div>
        <div className="mt-10">
          <img
            src="/hero-image.png"
            alt="Freelancer Hub Hero"
            className="mx-auto w-3/4 max-w-xl"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="benefits" className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          <div className="bg-gray-50 p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold text-blue-500 mb-4">
              For Freelancers
            </h3>
            <p className="text-gray-600">
              Get access to top-rated clients, flexible working hours, and
              secure payments.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold text-purple-500 mb-4">
              For Clients
            </h3>
            <p className="text-gray-600">
              Hire talented freelancers, manage projects efficiently, and scale
              your business.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold text-green-500 mb-4">Community</h3>
            <p className="text-gray-600">
              Join a growing community of professionals who love collaborating
              and creating.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          {/* Project Card 1 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-bold">Web Development</h3>
            <p className="text-gray-600">
              Create a responsive website for a retail business.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Details
            </button>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-gray-600">
              Design a logo and brand identity for a tech startup.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Details
            </button>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-bold">Mobile App Development</h3>
            <p className="text-gray-600">
              Build a cross-platform app for a food delivery service.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 FreelancerHub. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="hover:underline">
            Terms
          </a>{" "}
          |{" "}
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>{" "}
          |{" "}
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
