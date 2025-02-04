import type { IPlatform } from "./IPlatform";

export interface IProject {
  name: string;
  technologies: string[];
  platforms: IPlatform[];
  summary: string[];
  technicalOverview: string[];
  otherInformation: string[];
}
