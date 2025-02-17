// SearchContext.js
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");  // Qidiruv so'zi
  const [filteredCars, setFilteredCars] = useState([]);  // Filtrlash natijasi

  const filterCars = (cars) => {
    const filtered = cars.filter(
      (car) =>
        car.brand?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);  // Filtrlangan mashinalarni yangilash
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredCars, filterCars }}>
      {children}
    </SearchContext.Provider>
  );
};
