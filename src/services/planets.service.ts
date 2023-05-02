import { AxiosResponse } from 'axios';
import AdapterService from './adapter.service';
import { PlanetListProps, PlanetProps } from 'types/planets.type';

export default class PlanetsService extends AdapterService {
  constructor() {
    super();
  }

  async getPlanets(page: number): Promise<AxiosResponse<PlanetListProps>> {
    try {
      return this.sendGetRequest('/planets/?page=' + page);
    } catch (error: unknown) {
      throw new Error('PlanetService.getPlanets: ' + error);
    }
  }

  async getPlanet(params = {}): Promise<AxiosResponse<PlanetProps>> {
    try {
      return this.sendGetRequest('/planets/' + params);
    } catch (error: unknown) {
      throw new Error('PlanetService.getPlanet: ' + error);
    }
  }
}
