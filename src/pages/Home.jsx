// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   BarChart3,
//   BookOpen,
//   BriefcaseIcon,
//   GraduationCap,
//   LineChart,
//   Users,
//   FileText,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// const HomePage = () => {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-16 items-center justify-between">
//           <div className="flex items-center gap-2">
//             <GraduationCap className="h-6 w-6 text-blue-600" />
//             <span className="text-xl font-bold text-blue-600">Career360</span>
//           </div>
//           <nav className="hidden md:flex gap-6">
//             <Link
//               to="#features"
//               className="text-sm font-medium hover:text-blue-600"
//             >
//               Features
//             </Link>
//             <Link
//               to="#testimonials"
//               className="text-sm font-medium hover:text-blue-600"
//             >
//               Testimonials
//             </Link>
//             <Link
//               to="#success-stories"
//               className="text-sm font-medium hover:text-blue-600"
//             >
//               Success Stories
//             </Link>
//             <Link
//               to="#pricing"
//               className="text-sm font-medium hover:text-blue-600"
//             >
//               Pricing
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <Link to="/login">
//               <Button variant="outline">Log in</Button>
//             </Link>
//             <Link to="/signup">
//               <Button className="bg-blue-600 hover:bg-blue-700">Sign up</Button>
//             </Link>
//           </div>
//         </div>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-700 dark:text-blue-400">
//                     Accelerate Your Career Journey
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                     AI-powered career assessments, personalized roadmaps, and
//                     industry connections to help you reach your professional
//                     goals.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Link to="/signup?role=candidate">
//                     <Button
//                       size="lg"
//                       className="w-full min-[400px]:w-auto bg-blue-600 hover:bg-blue-700"
//                     >
//                       For Job Seekers
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </Button>
//                   </Link>
//                   <Link to="/signup?role=recruiter">
//                     <Button
//                       size="lg"
//                       variant="outline"
//                       className="w-full min-[400px]:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20"
//                     >
//                       For Recruiters
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center">
//                 <img
//                   alt="Career360 Platform"
//                   className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";

// Temporary Button component until you create a custom one
const Button = ({ children, variant, className, size }) => {
  const baseClasses = "px-4 py-2 rounded";
  const variantClasses = {
    outline: "border border-blue-600 text-blue-600",
    default: "bg-blue-600 text-white",
  };
  const sizeClasses = {
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        ${baseClasses} 
        ${variantClasses[variant] || variantClasses.default}
        ${sizeClasses[size] || ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Career360</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              to="#features"
              className="text-sm font-medium hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              to="#testimonials"
              className="text-sm font-medium hover:text-blue-600"
            >
              Testimonials
            </Link>
            <Link
              to="#success-stories"
              className="text-sm font-medium hover:text-blue-600"
            >
              Success Stories
            </Link>
            <Link
              to="#pricing"
              className="text-sm font-medium hover:text-blue-600"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-blue-700">
                    Accelerate Your Career Journey
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    AI-powered career assessments, personalized roadmaps, and
                    industry connections to help you reach your professional
                    goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/signup?role=candidate">
                    <Button
                      size="lg"
                      className="w-full min-[400px]:w-auto bg-blue-600 hover:bg-blue-700 flex items-center"
                    >
                      For Job Seekers
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/signup?role=recruiter">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full min-[400px]:w-auto border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      For Recruiters
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Career360 Platform"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
