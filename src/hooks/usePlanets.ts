import { useInfiniteQuery } from '@tanstack/react-query';
import PlanetsService from 'services/planets.service';

const planetsService = new PlanetsService();

const useFetchInfinitePlanets = () => {
  return (
    useInfiniteQuery(['planets'], ({ pageParam = 1 }) =>
      planetsService.getPlanets(pageParam).then((res) => res.data)
    ),
    {
      getNextPageParam: (lastPage: any) => {
        const nextPage = lastPage.next?.match(/page=(\d+)/)?.[1];
        return nextPage ? parseInt(nextPage) : undefined;
      }
    }
  );
};

export { useFetchInfinitePlanets };
