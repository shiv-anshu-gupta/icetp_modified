import React from "react";
import { FaClock } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import ReadMoreButton from "./ReadMoreButton"; // Use relative path

// Define the type for the props
interface ProjectCardProps {
  id: number;
  title: string;
  describe_project: string;
  min: number;
  max: number;
  post_date: string;
  skills: string[]; // Update to an array of strings
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  describe_project,
  min,
  max,
  post_date,
  skills,
}) => {
  return (
    <div className="w-17/20 lg:w-17/20 bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border border-gray-200">
      {/* Project Details */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
          <FaClock color="#163a24" className="inline-block" size={20} />
          <span>Posted on {new Date(post_date).toLocaleDateString()}</span>
        </p>
        <p className="text-sm text-gray-700 mt-2">{describe_project}</p>
        <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
          <GiSkills color="#163a24" className="inline-block" size={20} />
          <span>{skills.join(", ")}</span> {/* Join the array of skills */}
        </p>
        {/* Read More Button */}
        <ReadMoreButton projectId={id} />
      </div>
      {/* Project Budget */}
      <div className="flex-shrink-0 text-right bg-slate-200 rounded-lg">
        <p className="text-gray-800 text-justify font-sans px-1">
          {min} - {max} INR
        </p>
        <p className="text-sm text-gray-500 px-1">Fixed Rate</p>
      </div>
    </div>
  );
};

export default ProjectCard;
