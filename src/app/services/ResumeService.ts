import fs from "node:fs";
import path from "node:path";
import resumeTemplate from "../data/resume-template.json";
import type { IDemographics, IEducation, IExperience, IPlatform, IResume } from "../models/resume";

export default abstract class ResumeService {
	private static readonly resume = this.getResume();

	private constructor() {}

	public static getDemographics(): IDemographics {
		return ResumeService.resume?.demographics ?? resumeTemplate.demographics;
	}

	public static getEducation(): IEducation[] {
		return ResumeService.resume?.education ?? resumeTemplate.education;
	}

	public static getExperience(): IExperience[] {
		return ResumeService.resume?.experience ?? resumeTemplate.experience;
	}

	public static getLanguages(): string[] {
		return ResumeService.resume?.languages ?? resumeTemplate.languages;
	}

	public static getPlatforms(): IPlatform[] {
		return ResumeService.resume?.platforms ?? resumeTemplate.platforms;
	}

	public static getSummary(): string {
		return ResumeService.resume?.summary?.join(" ") ?? resumeTemplate.summary?.join(" ");
	}

	public static getTechnologies(): string[] {
		return ResumeService.resume?.technologies ?? resumeTemplate.technologies;
	}

	private static getResume(): IResume | undefined {
		try {
			const fileName = path.join(process.cwd(), "/src/app/data/resume.json");
			const data = fs.readFileSync(fileName, "utf-8");
			const resume = JSON.parse(data);
			return resume;
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}
}
