import * as React from "react";

const Search = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.035 14.255h-.79l-4.99 5 1.49 1.49 5-4.99v-.79l.27-.28c1.14.98 2.62 1.57 4.23 1.57a6.5 6.5 0 1 0-6.5-6.5c0 1.61.59 3.09 1.57 4.23l-.28.27Zm9.71-4.5c0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);

export default Search;
