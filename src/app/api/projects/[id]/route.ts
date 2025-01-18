import { NextRequest, NextResponse } from "next/server";
import ProjectModel from "../../model/ProjectModel"; // Adjust the path as necessary

// GET handler for fetching project by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const projectId = params.id;

  if (!projectId) {
    return NextResponse.json(
      { error: "Project ID is required" },
      { status: 400 }
    );
  }

  try {
    const projectDetails = await ProjectModel.getProjectById(Number(projectId));

    if (!projectDetails) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(projectDetails, { status: 200 });
  } catch (error) {
    console.error("Error fetching project details:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
