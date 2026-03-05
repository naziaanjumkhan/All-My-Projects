import "animate.css";
import { useEffect, useRef, useState } from "react";

const Project = () => {
  const courses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      instructor: "John Doe",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    },
    {
      id: 2,
      title: "React From Zero to Hero",
      instructor: "Jane Smith",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      instructor: "David Miller",
      price: "₹3999",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const pricingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observerArr) => {
        const isAppear = observerArr[0].isIntersecting;
        setIsVisible(isAppear);
      },
      { threshold: 0.2 },
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }
    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600">EduSell</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#courses" className="hover:text-indigo-600">
            Courses
          </a>
          <a href="#pricing" className="hover:text-indigo-600">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-indigo-600">
            Reviews
          </a>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-linear-to-r from-indigo-500 to-purple-600 text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Learn Skills That Pay the Bills
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Join thousands of students learning modern development skills from
          industry experts.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Explore Courses
        </button>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Popular Courses
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                <p className="text-gray-500 mb-4">
                  Instructor: {course.instructor}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-bold text-lg">
                    {course.price}
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className={`relative py-16 bg-gray-100 px-8 ${isVisible} ? 'animate__animated animate__slideInUp' : ''}`}
        ref={pricingRef}
      >
        <h3 className="text-3xl font-bold text-center mb-12">Simple Pricing</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-bold mb-4">Basic</h4>
            <p className="text-3xl font-bold mb-6">₹999</p>
            <p className="mb-6 text-gray-500">
              Access to 5 Courses + Community Support
            </p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Choose Plan
            </button>
          </div>

          <div className="bg-indigo-600 text-white p-8 rounded-xl shadow-xl text-center scale-105">
            <h4 className="text-xl font-bold mb-4">Pro</h4>
            <p className="text-3xl font-bold mb-6">₹2999</p>
            <p className="mb-6">Unlimited Courses + Certificates + Support</p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:scale-105 transition">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          What Our Students Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="italic mb-4">
              “This platform helped me land my first developer job!”
            </p>
            <h4 className="font-semibold">— Ayesha Khan</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="italic mb-4">
              “Clear explanations and real-world projects.”
            </p>
            <h4 className="font-semibold">— Rahul Sharma</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="italic mb-4">
              “Worth every rupee. Highly recommended.”
            </p>
            <h4 className="font-semibold">— Sneha Patel</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-indigo-600 text-white px-4">
        <h2 className="text-4xl font-bold mb-6">Start Learning Today</h2>
        <p className="mb-8">
          Upgrade your skills and boost your career with our expert-led courses.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2026 EduSell. All rights reserved.
      </footer>
    </div>
  );
};

export default Project;
