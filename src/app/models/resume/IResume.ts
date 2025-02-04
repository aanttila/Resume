import type { IDemographics } from "./IDemographics";
import type { IEducation } from "./IEducation";
import type { IExperience } from "./IExperience";
import type { IPlatform } from "./IPlatform";

export interface IResume {
  demographics: IDemographics;
  summary: string[];
  languages: string[];
  platforms: IPlatform[];
  technologies: string[];
  experience: IExperience[];
  education: IEducation[];
}
