import { Injectable } from '@nestjs/common';
import { CreateDatumInput } from './dto/create-datum.input';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { Datum } from './entities/datum.entity';

@Injectable()
export class DataService {
  companyUrls: string;
  travelUrls: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.companyUrls = this.configService.get<string>('COMPANY_URL');
    this.travelUrls = this.configService.get<string>('TRAVEL_URL');
  }

  create(createDatumInput: CreateDatumInput) {
    return 'This action adds a new datum';
  }

  addCostToCompanies(companies, travels) {
    // Define a helper function to recursively calculate and add cost for each company
    function calculateAndAddCost(company) {
      if (!company.children || company.children.length === 0) {
        // Base case: if the company has no children, set its cost as the total cost
        return company.cost;
      }

      let totalCost = company.cost;
      for (const child of company.children) {
        // Recursively calculate and add cost for each child company
        const childCost = calculateAndAddCost(child);
        totalCost += childCost;
      }
      company.cost = totalCost; // Set the total cost for the parent company
      return totalCost;
    }

    // Create a dictionary to quickly lookup companies by their id
    const companyMap = {};
    for (const company of companies) {
      company.children = []; // Initialize children array for each company
      company.cost = 0; // Initialize travel cost for each company
      companyMap[company.id] = company; // Add company to the dictionary with its id as the key

      if (company.parentId !== '0') {
        // If the company has a parent, add it as a child to its parent
        const parent = companyMap[company.parentId];
        if (parent) {
          parent.children.push(company);
        }
      }
    }

    // Loop through the travel list and update the travel costs for corresponding companies
    for (const travel of travels) {
      const company = companyMap[travel.companyId];
      if (company) {
        company.cost += Number(travel.price);
      }
    }

    // Calculate and add cost for each company
    for (const company of companies) {
      calculateAndAddCost(company);
    }

    // Return the list of all companies with their corresponding costs
    return companies;
  }

  async findAll() {
    // fetch data from url
    const companies = await lastValueFrom(
      this.httpService.get(this.companyUrls),
    );
    const travels = await lastValueFrom(this.httpService.get(this.travelUrls));
    const companiesData = companies.data.map((company: Datum) => {
      return {
        ...company,
        createdAt: new Date(company.createdAt),
      };
    });
    const travelsData = travels.data.map((travel: Datum) => {
      return {
        ...travel,
        createdAt: new Date(travel.createdAt),
      };
    });
    const listCompanies: Datum[] = this.addCostToCompanies(
      companiesData,
      travelsData,
    );
    return listCompanies;
  }

  async findOne(id: string) {
    const companies = await lastValueFrom(
      this.httpService.get(this.companyUrls),
    );
    const travels = await lastValueFrom(this.httpService.get(this.travelUrls));
    const companiesData = companies.data.map((company: Datum) => {
      return {
        ...company,
        createdAt: new Date(company.createdAt),
      };
    });
    const travelsData = travels.data.map((travel: Datum) => {
      return {
        ...travel,
        createdAt: new Date(travel.createdAt),
      };
    });
    const companiesUpdate: Datum[] = this.addCostToCompanies(
      companiesData,
      travelsData,
    );
    return companiesUpdate.find((company) => company.id === id);
  }
}
