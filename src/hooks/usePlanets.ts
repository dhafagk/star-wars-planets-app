import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import PlanetsService from 'services/planets.service';

const planetsService = new PlanetsService();

interface Kontol {}

const useFetchInfinitePlanets = () => {
  return useInfiniteQuery({
    queryKey: ['planets'],
    queryFn: ({ pageParam = 1 }) => planetsService.getPlanets(pageParam).then((res) => res.data),
    getNextPageParam: (lastPage: any) => {
      const nextPage = lastPage.next?.match(/page=(\d+)/)?.[1];
      return nextPage ? parseInt(nextPage) : undefined;
    }
  });
};

const useFetchPlanetDetail = (id: number) => {
  return useQuery({
    queryKey: ['planet', id],
    queryFn: () => planetsService.getPlanet(id),
    select: (res: any) => res.data
  });
};

export { useFetchInfinitePlanets, useFetchPlanetDetail };
