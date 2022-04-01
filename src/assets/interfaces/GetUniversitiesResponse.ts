import { University } from './University';

export interface GetUniversitiesResponse {
  country: string;
  name: string;
  domains: string[];
  alpha_two_code: string;
  'state-province'?: string;
  web_pages: string[];
}

export const parseUniversity = (res: GetUniversitiesResponse): University => {
  return {
    country: res.country,
    name: res.name,
    domains: res.domains,
    alphaTwoCode: res.alpha_two_code,
    stateProvince: res['state-province'],
    webPages: res.web_pages,
  };
};
