import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { 
  BarChart,
  BriefcaseIcon,
  CheckCircle,
  GraduationCap,
  LineChart,
  LogOut,
  Settings,
  User,
  Users,
} from 'lucide-react';


// Since we can't use Next.js Link, we'll use a basic anchor tag or React Router Link
// const Link = ({ href, children, className }) => (
//   <a href={href} className={className}>
//     {children}
//   </a>
// );

// Mock Button component (you'd typically import from a UI library)
const Button = ({ 
  children, 
  variant = 'solid', 
  size, 
  className = '', 
  onClick 
}) => {
  const baseClasses = 'px-4 py-2 rounded';
  const variantClasses = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-200 text-blue-600 hover:bg-blue-50',
    ghost: 'hover:bg-gray-100'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Card component (simplified)
const Card = ({ children, className = '' }) => (
  <div className={`border rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);

Card.Header = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);

Card.Content = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-4 ${className}`}>{children}</div>
);

// Tabs component (simplified)
const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const tabChildren = React.Children.map(children, child => {
    if (child.type === TabsList) {
      return React.cloneElement(child, { activeTab, setActiveTab });
    }
    return child;
  });

  return <div>{tabChildren}</div>;
};

const TabsList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="grid grid-cols-3 bg-blue-100 mb-4">
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`py-2 ${isActive ? 'bg-blue-600 text-white' : ''}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, activeTab }) => {
  return activeTab === value ? <div>{children}</div> : null;
};

export default function HRDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Career360</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/hr-dashboard" className="text-sm font-medium text-blue-600">
              Dashboard
            </Link>
            <Link href="/job-postings" className="text-sm font-medium hover:text-blue-600">
              Job Postings
            </Link>
            <Link href="/applicants" className="text-sm font-medium hover:text-blue-600">
              Applicants
            </Link>
            <Link href="/interviews" className="text-sm font-medium hover:text-blue-600">
              Interviews
            </Link>
            <Link href="/reports" className="text-sm font-medium hover:text-blue-600">
              Reports
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              <span className="sr-only">Profile</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              <span className="sr-only">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-700">HR Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, Sarah. Here's an overview of your recruitment activities.
            </p>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-blue-100 shadow-md">
              <Card.Header>
                <Card.Title className="text-blue-700">Open Positions</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex items-center">
                  <BriefcaseIcon className="h-8 w-8 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold">24</span>
                </div>
              </Card.Content>
            </Card>

            <Card className="border-green-100 dark:border-green-900/50 shadow-md">
              <Card.Header className='pb-2'>
                <Card.Title className="text-lg text-green-700 dark:text-green-400">New Applicants</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold">187
                  </span>
                </div>
              </Card.Content>
            </Card>

            <Card className="border-amber-100 dark:border-amber-900/50 shadow-md">
              <Card.Header className="pb-2">
                <Card.Title className="text-lg text-amber-700 dark:text-amber-400">Interviews Scheduleds</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold">12
                  </span>
                </div>
              </Card.Content>
            </Card>

            <Card className="border-purple-100 dark:border-purple-900/50 shadow-md">
              <Card.Header className="pb-2">
                <Card.Title className="text-lg text-purple-700 dark:text-purple-400">Time to Hire (Avg)</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex items-center">
                  <LineChart className="h-8 w-8 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold">18 days
                  </span>
                </div>
              </Card.Content>
            </Card>
            {/* Similar cards for New Applicants, Interviews, etc. */}
          </div>
          
         
          {/* Recruitment Analytics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Recruitment Analytics</h2>
            <Tabs defaultValue="applications">
              <TabsList>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="interviews">Interviews</TabsTrigger>
                <TabsTrigger value="hires">Hires</TabsTrigger>
              </TabsList>
              <TabsContent value="applications">
                <Card className="border-blue-100 shadow-md">
                  <Card.Header>
                    <Card.Title className="text-blue-700">Application Trends</Card.Title>
                    <p className="text-gray-600">Number of applications received over time</p>
                  </Card.Header>
                  <Card.Content>
                    <div className="h-[300px] w-full bg-gray-100 flex items-center justify-center">
                      Chart Placeholder
                    </div>
                  </Card.Content>
                </Card>
              </TabsContent>
              {/* Similar TabsContent for interviews and hires */}
            </Tabs>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Quick Actions</h2>
            <div className="grid gap-4 md:grid-cols-3">
            <Link to="/newJobPost">
  <Button className="bg-blue-600 hover:bg-blue-700 flex items-center text-white">
    <BriefcaseIcon className="mr-2 h-4 w-4" /> 
    Post New Job For Recruiters
  </Button>
</Link>
<Link to="/reviewapplicants">
  <Button className="bg-blue-600 hover:bg-blue-700 flex items-center text-white">
    <BriefcaseIcon className="mr-2 h-4 w-4" /> 
    Review Applicants
  </Button>
</Link>

<Link to="/createTest">
  <Button className="bg-blue-600 hover:bg-blue-700 flex items-center text-white">
    <BriefcaseIcon className="mr-2 h-4 w-4" /> 
    Create a Test
  </Button>
</Link>


              {/* <Button variant="outline">
                <Users className="mr-2 h-4 w-4" /> Review Applicants
              </Button>
              <Button variant="outline">
                <BarChart className="mr-2 h-4 w-4" /> Generate Reports
              </Button> */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-4 bg-slate-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-600 md:text-left">
            © 2024 Career360. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-blue-600">Help</Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">Privacy</Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}