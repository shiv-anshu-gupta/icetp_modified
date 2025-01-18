import { NextResponse } from "next/server";
import ProjectModel, { ProjectData } from "../model/ProjectModel";

// GET Method
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const search = searchParams.get("search");

  const currentPage = Number(page || 1);
  const currentLimit = Number(limit || 10);
  const currentSearch = String(search || "");

  try {
    const projects = await ProjectModel.getAllProjects(
      currentPage,
      currentLimit,
      currentSearch
    );
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST Method
export async function POST(req: Request) {
  try {
    const newProjectData: ProjectData = await req.json();

    if (!newProjectData || !newProjectData.title || !newProjectData.category) {
      return NextResponse.json(
        { error: "Invalid project data" },
        { status: 400 }
      );
    }

    const projectId = await ProjectModel.createProject(newProjectData);
    return NextResponse.json(
      { message: "Project created successfully", projectId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
