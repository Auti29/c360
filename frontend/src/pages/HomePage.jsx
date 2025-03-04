import React from 'react';
import { 
  ChevronRight, 
  Users, 
  Briefcase, 
  Award, 
  BookOpen, 
  TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Trending job roles
  const trendingRoles = [
    { 
      title: 'Software Engineer', 
      description: 'Transform ideas into innovative tech solutions',
      icon: '💻'
    },
    { 
      title: 'Data Scientist', 
      description: 'Unlock insights from complex data landscapes',
      icon: '📊'
    },
    { 
      title: 'Product Manager', 
      description: 'Bridge technology and business strategy',
      icon: '🚀'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Software Developer',
      quote: "Careers360 transformed my job search with precise skill matching and personalized guidance.",
      image: "/api/placeholder/100/100"
    },
    {
      name: 'Raj Patel',
      role: 'HR Recruiter',
      quote: "The AI-driven assessments have significantly improved our hiring precision.",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold">
              Unlock Your Career Potential with Careers360
            </h1>
            <p className="text-xl text-blue-100">
              AI-Powered Skills Matching | Personalized Career Growth | Smart Hiring Solutions
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex space-x-4">
              <Link 
                to="/signup/candidate" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center"
              >
                For Job Seekers <ChevronRight className="ml-2" />
              </Link>
              <Link 
                to="/signup/recruiter" 
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg flex items-center"
              >
                For Recruiters <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
          
          
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto text-blue-600 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Assessments</h3>
          <p>Dynamic skill evaluation with real-world simulations</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Briefcase className="mx-auto text-green-600 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Career Matching</h3>
          <p>Personalized job recommendations tailored to your skills</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Award className="mx-auto text-purple-600 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
          <p>Continuous learning paths and mentorship programs</p>
        </div>
      </section>

      {/* Trending Job Roles */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Trending Job Roles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trendingRoles.map((role, index) => (
              <div 
                key={index} 
                className="border rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md flex items-center"
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="italic mb-2">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Navigation</h2>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Link 
              to="/login" 
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg flex items-center"
            >
              Login/Signup <ChevronRight className="ml-2" />
            </Link>
            <Link 
              to="/candidate-dashboard" 
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg flex items-center"
            >
              Candidate Dashboard <ChevronRight className="ml-2" />
            </Link>
            <Link 
              to="/hr-dashboard" 
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg flex items-center"
            >
              HR Dashboard <ChevronRight className="ml-2" />
            </Link>
            <Link 
              to="/career-roadmap" 
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg flex items-center"
            >
              Career Roadmap <ChevronRight className="ml-2" />
            </Link>
            <Link 
              to="/mentorship" 
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg flex items-center"
            >
              Mentorship Program <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Careers360. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;