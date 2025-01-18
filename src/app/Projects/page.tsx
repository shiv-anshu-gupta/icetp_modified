"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard"; // Adjust the path based on your Next.js folder structure
import FilterSidebar from "../components/FilterSidebar"; // Adjust the path based on your folder structure
import ReactPaginate from "react-paginate";
import axios from "axios";
import Header from "../components/Header";

// Define the types for Project and API response
interface Project {
  id: number;
  title: string;
  description?: string; // Optional field
  min?: number; // Optional field
  max?: number; // Optional field
  post_date?: string; // Optional field
  skills?: string[]; // Ensure it is an array
}

interface ApiResponse {
  data: Project[];
  total: number;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalProjects, setTotalProjects] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const itemsPerPage = 6;

  // Fetch projects from the API
  const fetchProjects = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get<ApiResponse>(
        "/api/projects", // Use relative API path for Next.js
        {
          params: { page: page + 1, limit: itemsPerPage, search: searchTerm },
        }
      );
      const projectsData = response.data.data.map((project) => ({
        ...project,
        skills: Array.isArray(project.skills)
          ? project.skills
          : (project.skills || "").split(","), // Convert comma-separated string to array
      }));
      setProjects(projectsData);
      setTotalProjects(response.data.total || 0);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search and pagination
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProjects(currentPage);
    }, 300); // Delay API call by 300ms
    return () => clearTimeout(timer);
  }, [currentPage, searchTerm]);

  const handlePageClick = (selectedItem: { selected: number }) =>
    setCurrentPage(selectedItem.selected);

  const pageCount = Math.ceil(totalProjects / itemsPerPage);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar for navigation (16.67% width) */}
          <div className="w-1/6 bg-customGreen p-4 rounded-md">
            <FilterSidebar />
          </div>

          {/* Main content (83.33% width with padding) */}
          <section className="w-full lg:w-5/6 pl-4 pr-4">
            {/* Heading and Search Box */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Projects
              </h1>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects..."
                className="w-full sm:w-1/5 px-4 py-2 border rounded-md"
              />
            </div>

            {/* Projects */}
            {loading ? (
              <p className="text-center text-gray-500">Loading projects...</p>
            ) : projects.length === 0 ? (
              <p className="text-center text-gray-500">
                No projects match your search criteria.
              </p>
            ) : (
              <div className="space-y-6 px-12">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    describe_project={project.description || "No description"}
                    min={project.min || 0}
                    max={project.max || 0}
                    post_date={project.post_date || "Unknown"}
                    skills={project.skills || []}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            <ReactPaginate
              previousLabel="< previous"
              nextLabel="next >"
              breakLabel="..."
              onPageChange={handlePageClick}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              containerClassName="flex justify-center space-x-2 mt-6"
              activeClassName="bg-blue-500 text-white font-bold"
              pageLinkClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
              previousLinkClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
              nextLinkClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
              disabledClassName="opacity-50 cursor-not-allowed"
              breakLinkClassName="px-4 py-2 text-gray-500"
              ariaLabelBuilder={(page) => `Go to page ${page}`}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
