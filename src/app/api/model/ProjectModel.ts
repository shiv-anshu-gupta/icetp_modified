import db from "../../../../config/database";

export interface ProjectData {
  title: string;
  category: string;
  location: string;
  min: number;
  max: number;
  skills: string;
  type: string;
  describe_project: string;
  upload_file: string;
  user_email: string;
  start_date: string;
  end_date: string;
  status: string;
  post_date: string;
  post_time: string;
  hourly: boolean;
  employer_id: number;
}

const ProjectModel = {
  createProject: async (data: ProjectData): Promise<number> => {
    const sql = `
      INSERT INTO projects 
      (title, category, location, min, max, skills, type, describe_project, upload_file, user_email, 
      start_date, end_date, status, post_date, post_time, hourly, employer_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
      console.log("Executing SQL for creating project:", sql);
      console.log("With values:", Object.values(data));

      const [result]: any = await db.execute(sql, Object.values(data));
      console.log("Insert result:", result);

      return result.insertId;
    } catch (error) {
      console.error("Error creating project:", error);
      throw error; // Re-throw to allow the API to handle it
    }
  },

  getAllProjects: async (
    page: number = 1,
    limit: number = 6,
    search: string = ""
  ) => {
    const offset = (page - 1) * limit;
    const searchQuery = `%${search}%`;

    const sql = `
      SELECT * FROM projects
      WHERE title LIKE ? OR category LIKE ? OR describe_project LIKE ? OR skills LIKE ?
      LIMIT ${limit} OFFSET ${offset}
    `;

    const countSql = `
      SELECT COUNT(*) AS total FROM projects 
      WHERE title LIKE ? OR category LIKE ? OR describe_project LIKE ? OR skills LIKE ?
    `;

    try {
      console.log("Executing SQL to fetch projects:", sql);
      console.log("With searchQuery:", searchQuery);

      // Fetch paginated projects
      const [projects]: any = await db.execute(sql, [
        searchQuery,
        searchQuery,
        searchQuery,
        searchQuery,
      ]);
      console.log("Fetched projects:", projects);

      // Fetch the total count
      const [[{ total }]]: any = await db.execute(countSql, [
        searchQuery,
        searchQuery,
        searchQuery,
        searchQuery,
      ]);
      console.log("Total count of projects:", total);

      return {
        data: projects,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      };
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error; // Re-throw to allow the API to handle it
    }
  },

  getProjectById: async (id: number) => {
    const sql = `
      SELECT p.*, u.name AS employer_name 
      FROM projects p 
      LEFT JOIN users u ON p.user_id = u.id 
      WHERE p.id = ?
    `;

    try {
      console.log("Executing SQL to fetch project by ID:", sql);
      console.log("With project ID:", id);

      const [project]: any = await db.execute(sql, [id]);
      console.log("Fetched project:", project);

      if (project.length === 0) {
        throw new Error(`Project with ID ${id} not found.`);
      }

      return project[0];
    } catch (error) {
      console.error("Error fetching project by ID:", error);
      throw error;
    }
  },

  updateProject: async (id: number, data: Partial<ProjectData>) => {
    const sql = `
      UPDATE projects 
      SET title = ?, category = ?, location = ?, min = ?, max = ?, skills = ?, type = ?, describe_project = ?, 
      upload_file = ?, user_email = ?, start_date = ?, end_date = ?, status = ?, post_date = ?, post_time = ?, 
      hourly = ?, employer_id = ? 
      WHERE id = ?
    `;

    try {
      console.log("Executing SQL to update project:", sql);
      console.log("With values:", [...Object.values(data), id]);

      const [result]: any = await db.execute(sql, [...Object.values(data), id]);
      console.log("Update result:", result);

      return result;
    } catch (error) {
      console.error("Error updating project:", error);
      throw error; // Re-throw to allow the API to handle it
    }
  },

  deleteProject: async (id: number) => {
    const sql = "DELETE FROM projects WHERE id = ?";

    try {
      console.log("Executing SQL to delete project:", sql);
      console.log("With project ID:", id);

      const [result]: any = await db.execute(sql, [id]);
      console.log("Delete result:", result);

      return result;
    } catch (error) {
      console.error("Error deleting project:", error);
      throw error; // Re-throw to allow the API to handle it
    }
  },
};

export default ProjectModel;
