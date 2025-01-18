import React, { useState } from "react";
import axios from "axios";

// Define types for props and project details
interface ReadMoreButtonProps {
  projectId: number;
}

interface ProjectDetails {
  title: string;
  describe_project: string;
  employer_name: string;
  employer_rating: number;
  employer_contact: string;
  min: number;
  max: number;
  post_date: string;
  start_date: string;
  end_date: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ projectId }) => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showBidForm, setShowBidForm] = useState<boolean>(false);
  const [bidAmount, setBidAmount] = useState<string>("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  // Function to fetch project details
  const fetchProjectDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${apiUrl}/api/projects/${projectId}`);
      setProjectDetails(response.data); // Set project details received from the server
    } catch (err: any) {
      if (err.response?.status === 404) {
        setError("Project not found.");
      } else {
        setError("Failed to load project details.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to handle bid submission
  const handleBidSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/api/project/${projectId}/bid`, { bidAmount });
      alert("Bid placed successfully!");
      setShowBidForm(false); // Close the bid form after successful submission
    } catch (err) {
      console.error("Error placing bid:", err);
      alert("Failed to place bid. Please try again.");
    }
  };

  return (
    <div>
      {/* Read More Button */}
      <button
        onClick={fetchProjectDetails}
        className="mt-4 bg-customGreen text-white px-4 py-2 rounded border-2 border-customGreen transition-colors duration-300 hover:bg-white hover:text-customGreen"
      >
        {loading ? "Loading..." : "Read More"}
      </button>

      {/* Display error message */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Display project details */}
      {projectDetails && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            {projectDetails.title}
          </h3>
          <p className="text-gray-700 mt-4">
            {projectDetails.describe_project}
          </p>
          <div className="mt-4">
            <h4 className="text-xl font-medium text-gray-800">
              Employer Details:
            </h4>
            <p className="text-gray-700">
              Name: {projectDetails.employer_name}
            </p>
            <p className="text-gray-700">
              Rating: {projectDetails.employer_rating}
            </p>
            <p className="text-gray-700">
              Contact: {projectDetails.employer_contact}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              Budget: {projectDetails.min} - {projectDetails.max} INR
            </p>
            <p className="text-gray-700">
              Posted on:{" "}
              {new Date(projectDetails.post_date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">
              Start Date:{" "}
              {new Date(projectDetails.start_date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">
              End Date: {new Date(projectDetails.end_date).toLocaleDateString()}
            </p>
          </div>
          {/* Bid Now Button */}
          <button
            onClick={() => setShowBidForm(true)}
            className="mt-4 bg-customGreen text-white px-4 py-2 rounded border-2 border-customGreen transition-colors duration-300 hover:bg-white hover:text-customGreen"
          >
            Bid Now
          </button>
        </div>
      )}

      {/* Bid Form */}
      {showBidForm && (
        <div className="mt-6 p-4 border rounded shadow-md bg-gray-100">
          <h3 className="text-xl font-semibold text-gray-800">
            Place Your Bid
          </h3>
          <form onSubmit={handleBidSubmit} className="mt-4">
            <label className="block text-gray-700 mb-2">
              Bid Amount (INR):
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="mt-1 block w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </label>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-green-800"
              >
                Submit Bid
              </button>
              <button
                type="button"
                onClick={() => setShowBidForm(false)}
                className="ml-4 bg-red-600 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-red-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReadMoreButton;
