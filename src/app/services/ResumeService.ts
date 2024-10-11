import fs from "fs";
import path from "path";
import resumeTemplate from "../data/resume-template.json";
import { IDemographics, IEducation, IExperience, IPlatform, IResume } from "../models/resume";

export default abstract class ResumeService {
  private static readonly resume = this.getResume();

  private constructor() {}

  public static getDemographics(): IDemographics {
    if (this.resume) {
      return this.resume.demographics;
    }

    return resumeTemplate.demographics;
  }

  public static getEducation(): IEducation[] {
    if (this.resume) {
      return this.resume.education;
    }

    return resumeTemplate.education;
  }

  public static getExperience(): IExperience[] {
    if (this.resume) {
      return this.resume.experience;
    }

    return resumeTemplate.experience;
  }

  public static getLanguages(): string[] {
    if (this.resume) {
      return this.resume.languages;
    }

    return resumeTemplate.languages;
  }

  public static getPlatforms(): IPlatform[] {
    if (this.resume) {
      return this.resume.platforms;
    }

    return resumeTemplate.platforms;
  }

  public static getSummary(): string {
    if (this.resume) {
      return this.resume.summary?.join(" ");
    }

    return resumeTemplate.summary?.join(" ");
  }

  public static getTechnologies(): string[] {
    if (this.resume) {
      return this.resume.technologies;
    }

    return resumeTemplate.technologies;
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
