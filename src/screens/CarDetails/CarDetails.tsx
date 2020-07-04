import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Theme from "../../theme/theme";
import { loadCars } from "../../redux/actions/carActions";
import NotFound from "../../components/NotFound";
import { AppStateType, CarType } from "../../interfaces/car.type";
import CarInfo from "../../components/CarInfo/CarInfo";

interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

function CarDetails({ match }: MatchProps): JSX.Element {
  const dispatch = useDispatch();
  const [id] = useState<string>(match.params.id);
  const carDetail: CarType = useSelector((state: AppStateType) => {
    return state.cars.find((car) => car.licenseNumber === id);
  });

  useEffect(() => {
    if (!carDetail) {
      dispatch(loadCars());
    }
  }, [dispatch, carDetail]);

  return (
    <CarDetailsWrapper>
      {carDetail && <CarInfo car={carDetail} />}
      {!carDetail && <NotFound />}
      <BackButton href="/cars">Back</BackButton>
    </CarDetailsWrapper>
  );
}

const CarDetailsWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const BackButton = styled.a`
  border-radius: 30px 30px 30px 0px;
  background: ${Theme.colors.primary};
  padding: 15px;
  margin: 0 auto;
  display: block;
  margin-top: 32px;
  width: 50px;
  color: ${Theme.colors.white};
  text-align: center;
  font-size: ${Theme.fontSize.span};
  &:hover {
    background: ${Theme.colors.secondary};
    color: ${Theme.colors.white};
  }
`;

export default CarDetails;
