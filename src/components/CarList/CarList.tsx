import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Theme from "../../theme/theme";
import { CarType } from "../../interfaces/car.type";
import { formateTitle } from "../../util/carListUtil";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CarListMobile from "../CarListMobile/CarListMobile";
interface CarListType {
  cars: CarType[];
  sortOrder: string;
  sortKey: string;
  setSortKey: React.Dispatch<React.SetStateAction<string>>;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

interface ColProps {
  sortOrder?: string;
  activeSort?: boolean;
}
function CarList({
  cars,
  sortKey,
  sortOrder,
  setSortKey,
  setSortOrder,
}: CarListType): JSX.Element {
  const history = useHistory();
  const { width } = useWindowDimensions();
  const handleClick = (key: string) => {
    if (key === sortKey) {
      sortOrder === "asc" ? setSortOrder("desc") : setSortOrder("asc");
    } else {
      setSortKey(key);
    }
  };

  return (
    <CarListWrapper>
      {width > 550 && (
        <>
          <CarListHeader>
            {[
              "make",
              "model",
              "year",
              "licenseNumber",
              "location",
              "range",
              "numberOfSeats",
              "numberOfDoors",
            ].map((key) => {
              return (
                <Col
                  key={key}
                  onClick={(e) => {
                    handleClick(key);
                  }}
                >
                  {formateTitle(key)}
                  {sortKey === key ? (
                    sortOrder === "asc" ? (
                      <i className="fa fa-sort-down"></i>
                    ) : (
                      <i className="fa fa-sort-up"></i>
                    )
                  ) : (
                    ""
                  )}
                </Col>
              );
            })}
          </CarListHeader>
          <CarListSection>
            {cars.map(
              (car: CarType): JSX.Element => {
                return CarRow(car, history);
              }
            )}
          </CarListSection>
        </>
      )}

      {width < 550 && <CarListMobile cars={cars} />}
    </CarListWrapper>
  );
}

function CarRow(car: CarType, history: any) {
  const viewDetails = () => {
    let path = `/cars/${car.licenseNumber}`;
    history.push(path);
  };

  return (
    <Row key={car.licenseNumber} onClick={viewDetails}>
      <Col>{car.make}</Col>
      <Col>{car.model}</Col>
      <Col>{car.year}</Col>
      <Col>{car.licenseNumber}</Col>
      <Col>{car.location}</Col>
      <Col>{car.range}</Col>
      <Col>{car.numberOfSeats}</Col>
      <Col>{car.numberOfDoors}</Col>
    </Row>
  );
}

const CarListSection = styled.section``;
const CarListWrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 100px;
`;
const Col = styled.div<ColProps>`
  flex: 1;
  cursor: ${(sortOrder) =>
    sortOrder ? Theme.colors.secondary : Theme.colors.primary};
`;
const CarListHeader = styled.header`
  display: flex;
  align-items: center;

  color: ${Theme.colors.white};
  background: ${Theme.colors.secondary};
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  ${Col} {
    text-transform: capitalize;
    padding: 10px;
    .fa {
      margin-left: 5px;
      font-size: 20px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 2px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  ${Col} {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }
`;

export default CarList;
