// import { createContext, useEffect, useState } from "react";
// import { getFreeGames } from "../services/api.service";

// export const SearchContext = createContext();

// export const SeacrhProvider = ({ children }) => {
//   let [search, setSearch] = useState(null);

//   useEffect(() => {
//     getFreeGames(search);
//   }, [search]);

//   const updateSearch = async (currrentSearch) => {
//     setSearch(currrentSearch);

//     return (
//       <SearchContext.Provider
//         value={{
//           search,
//           updateSearch,
//         }}
//       >
//         {children}
//       </SearchContext.Provider>
//     );
//   };
// };
