import { Link } from "react-router-dom";
import { BriefcaseIcon, CheckCircle, LineChart, Users } from "lucide-react";

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded bg-blue-600 text-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`p-4 border rounded shadow ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="mb-2 font-semibold">{children}</div>
);
const CardContent = ({ children }) => (
  <div className="text-gray-700">{children}</div>
);
const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

const jobPostings = [
  { id: 1, title: "Software Engineer", applicants: 50 },
  { id: 2, title: "Product Manager", applicants: 30 },
  { id: 3, title: "UI/UX Designer", applicants: 20 },
  { id: 4, title: "Data Scientist", applicants: 40 },
];

const HRDashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-6 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
              HR Dashboard
            </h1>
          </div>
          <div className="mb-6 flex gap-4">
            <Link to="/dashboard/createassessment">Create Assessment</Link>
            <Link to="/dashboard/createjobposting">Create New Job Posting</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-blue-100 dark:border-blue-900/50">
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                <BriefcaseIcon className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-3xl font-bold">24</span>
              </CardContent>
            </Card>
            <Card className="border-green-100 dark:border-green-900/50">
              <CardHeader>
                <CardTitle>New Applicants</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                <Users className="h-8 w-8 text-green-600 mr-2" />
                <span className="text-3xl font-bold">187</span>
              </CardContent>
            </Card>
            <Card className="border-amber-100 dark:border-amber-900/50">
              <CardHeader>
                <CardTitle>Interviews Scheduled</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                <CheckCircle className="h-8 w-8 text-amber-600 mr-2" />
                <span className="text-3xl font-bold">12</span>
              </CardContent>
            </Card>
            <Card className="border-purple-100 dark:border-purple-900/50">
              <CardHeader>
                <CardTitle>Time to Hire (Avg)</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                <LineChart className="h-8 w-8 text-purple-600 mr-2" />
                <span className="text-3xl font-bold">18 days</span>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Current Job Postings
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {jobPostings.map((job) => (
                <Card
                  key={job.id}
                  className="border-gray-200 dark:border-gray-700"
                >
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {job.applicants} applicants
                    </span>
                    <Button className="bg-blue-500 hover:bg-blue-700">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HRDashboardPage;
