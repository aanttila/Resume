import { IDemographics } from "./IDemographics";
import { IEducation } from "./IEducation";
import { IExperience } from "./IExperience";
import { IPlatform } from "./IPlatform";

export interface IResume {
  demographics: IDemographics;
  summary: string[];
  languages: string[];
  platforms: IPlatform[];
  technologies: string[];
  experience: IExperience[];
  education: IEducation[];
}
