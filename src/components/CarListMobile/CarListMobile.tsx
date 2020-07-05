import React from "react";
import styled from "styled-components";
import Theme from "../../theme/theme";

import { useHistory } from "react-router-dom";
import { CarType } from "../../interfaces/car.type";

interface CarListType {
  cars: CarType[];
}

function CarListMobile({ cars }: CarListType): JSX.Element {
  const history = useHistory();
  const viewDetails = (car: CarType) => {
    let path = `/cars/${car.licenseNumber}`;
    history.push(path);
  };

  return (
    <CarListWrapper>
      {cars.map((car) => {
        return (
          <Table key={car.licenseNumber} onClick={(e) => viewDetails(car)}>
            <tbody>
              <tr>
                <th>Make</th>
                <td>{car.make}</td>
              </tr>
              <tr>
                <th>Model</th>
                <td>{car.model}</td>
              </tr>
              <tr>
                <th>Year</th>
                <td>{car.year}</td>
              </tr>
              <tr>
                <th>License Number</th>
                <td>{car.licenseNumber}</td>
              </tr>

              <tr>
                <th>Location</th>
                <td>{car.location}</td>
              </tr>
              <tr>
                <th>Range</th>
                <td>{car.range}</td>
              </tr>
              <tr>
                <th>Number Of Seats</th>
                <td>{car.numberOfSeats}</td>
              </tr>
              <tr>
                <th>Number Of Doors</th>
                <td>{car.numberOfDoors}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </CarListWrapper>
  );
}

const CarListWrapper = styled.section``;
const Table = styled.table`
  cursor: pointer;
  width: 90%;
  margin: 10px auto;
  border: 1px solid ${Theme.colors.secondary};
  th,
  td {
    text-align: left;
    width: 50%;
  }
`;

export default CarListMobile;
