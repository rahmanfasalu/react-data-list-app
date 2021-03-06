import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import SearchBox from "../../components/SearchBox";
import { loadCars } from "../../redux/actions/carActions";
import Pagination from "../../components/Pagination";
import { AppStateType, CarType } from "../../interfaces/car.type";
import CarList from "../../components/CarList";
import NotFound from "../../components/NotFound";

import { filterArray, compareValues } from "../../util/carListUtil";

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const [sortKey, setSortKey] = useState<string>("make");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [carsPerPage] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredCars, setFilteredCars] = useState<CarType[]>([]);
  const [carsInCurrentPage, setCarsInCurrentPage] = useState<CarType[]>([]);

  const cars = useSelector((state: AppStateType) => {
    return state.cars.sort(compareValues(sortKey, sortOrder));
  });

  useEffect(() => {
    dispatch(loadCars());

    return () => {};
  }, [dispatch]);

  useEffect(() => {
    if (cars && cars.length > 0) {
      setCurrentPage(1);
      setFilteredCars(filterArray(cars, query) as CarType[]);
    }

    return () => {};
  }, [cars, query]);

  useEffect(() => {
    setFilteredCars(filteredCars.sort(compareValues(sortKey, sortOrder)));
    getCarsForCurrentPage();
    return () => {};
  }, [sortKey, sortOrder]);

  useEffect(() => {
    if (filteredCars) {
      getCarsForCurrentPage();
    } else {
      setCarsInCurrentPage([]);
    }

    return () => {};
  }, [filteredCars, currentPage]);

  const getCarsForCurrentPage = () => {
    const indexOfLastCarsInPage = currentPage * carsPerPage;
    const indexOfFirstCarsInPage = indexOfLastCarsInPage - carsPerPage;
    setCarsInCurrentPage(
      filteredCars.slice(indexOfFirstCarsInPage, indexOfLastCarsInPage)
    );
  };

  return (
    <HomeWrapper>
      <SearchBox setQuery={setQuery} />
      {filteredCars && filteredCars.length > 0 && (
        <>
          <TotalResults>{`${filteredCars.length} cars loaded`}</TotalResults>
          <CarList
            cars={carsInCurrentPage}
            setSortKey={setSortKey}
            setSortOrder={setSortOrder}
            sortOrder={sortOrder}
            sortKey={sortKey}
          />
          <Pagination
            perPage={carsPerPage}
            total={filteredCars.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

      {filteredCars && filteredCars.length === 0 && <NotFound />}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const TotalResults = styled.p`
  text-align: center;
`;

export default Home;
