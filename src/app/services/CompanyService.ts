import fs from "node:fs";
import path from "node:path";
import type { ICompany } from "../models";

export default abstract class CompanyService {
  private static readonly companies = this.getCompanies();

  private constructor() {}

  public static getCompany(name: string): ICompany | undefined {
    const company = CompanyService.companies.find((c) => c.name === name);
    return company;
  }

  public static hasCompany(name: string): boolean {
    const company = CompanyService.companies.find((c) => c.name === name);
    return !!company;
  }

  private static getCompanies(): ICompany[] {
    try {
      const fileName = path.join(process.cwd(), "/src/app/data/companies.json");
      const data = fs.readFileSync(fileName, "utf-8");
      const companies = JSON.parse(data);
      return companies.companies ?? [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
