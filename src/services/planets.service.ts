import { AxiosResponse } from 'axios';
import AdapterService from './adapter.service';
import { PlanetListProps } from 'types/planets.type';

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
}
