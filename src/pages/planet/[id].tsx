import { useFetchPlanetDetail } from 'hooks/usePlanets';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { WishlistStore } from 'store/wishlist.store';
import styled from 'styled-components';
import { PlanetProps } from 'types/planets.type';

interface PlanetDetailProps {
  planetID: any;
}

const Container = styled.div`
  background: #242425;
  padding: 0 2rem;
`;

const Detail = styled.div`
  color: #999;
  padding: 20px;
`;

const Footer = styled.footer`
  align-items: center;
  border-top: 1px solid #eaeaea;
  color: #fff;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 2rem 0;
`;

const Button = styled.button`
  background-color: rgb(202 138 4);
  border-radius: 12px;
  color: #000;
  margin: 20px;
  padding: 8px 16px;
`;

const PlanetDetail: NextPage<PlanetDetailProps> = ({ planetID }) => {
  const route = useRouter();
  const { data: planet, isLoading } = useFetchPlanetDetail(planetID);

  const addToWishlist = WishlistStore((state) => state.addWishlist);

  const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const handleWishlist = (planet: PlanetProps) => {
    addToWishlist(planet);
    route.push('/wishlist');
  };

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <Container>
        <Detail>
          <h1 className="text-2xl text-yellow-600">{planet.name}</h1>
          <p>Rotation Period : {planet.rotation_period}</p>
          <p>Orbital Period : {planet.orbital_period}</p>
          <p>Diameter : {planet.diameter}</p>
          <p>Climate : {planet.climate}</p>
          <p>Gravity : {planet.gravity}</p>
          <p>Terrain : {planet.terrain}</p>
          <p>Surface Water : {planet.surface_water}</p>
          <p>Population : {planet.population}</p>
          <p>Residents :</p>
          <p>Films :</p>
        </Detail>
        <Button onClick={() => handleWishlist(planet)}>Add to Wishlist</Button>
        <Detail>Created At : {formatDate(planet.created)}</Detail>

        <Footer>
          <span>Made with ♥ by Dhafa Gustiadi Kurniawan</span>
        </Footer>
      </Container>
    </>
  );
};

PlanetDetail.getInitialProps = ({ query }) => {
  return {
    planetID: query.id
  };
};

export default PlanetDetail;
