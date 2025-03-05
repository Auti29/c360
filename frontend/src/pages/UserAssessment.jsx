import { Link } from "react-router-dom";
const UserAssessment = () => {
  const handleStartTest = () => {
    console.log("Test Started");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to 21Gurukul Assessment
        </h1>

        <p className="text-gray-600 mt-2">
          Please read the rules carefully before starting the test.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mt-4 text-left">
          <h2 className="text-lg font-semibold text-gray-700">Test Details:</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>
              <span className="font-medium">Company:</span> 21Gurukul
            </li>
            <li>
              <span className="font-medium">Duration:</span> 60 minutes
            </li>
            <li>
              <span className="font-medium">Rules:</span>
            </li>
            <ul className="list-disc list-inside pl-4 text-sm">
              <li>No external help or references allowed.</li>
              <li>Once started, the test cannot be paused.</li>
              <li>Ensure a stable internet connection.</li>
            </ul>
          </ul>
        </div>

        <Link
          to={"../assessment"}
          onClick={handleStartTest}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 mt-4"
        >
          Start Test
        </Link>
      </div>
    </div>
  );
};

export default UserAssessment;
