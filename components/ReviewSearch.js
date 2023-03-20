import { useState } from "react";
import { BiCheckboxChecked } from "react-icons/bi";
import { FaCaretSquareDown } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { TbListSearch } from "react-icons/tb";

function DropDown({ toggleSort, sortBy, onSortChange }) {
  if (!toggleSort) {
    return null;
  }

  return (
    <ul>
      <li onClick={() => onSortChange("userName")}>
        작성자
        {sortBy === "userName" && <BiCheckboxChecked />}
      </li>
      <li onClick={() => onSortChange("productName")}>
        책 이름
        {sortBy === "productName" && <BiCheckboxChecked />}
      </li>
      <li onClick={() => onSortChange("review")}>
        서평
        {sortBy === "review" && <BiCheckboxChecked />}
      </li>
    </ul>
  );
}

function ReviewSearch({ query, onQueryChange, sortBy, onSortChange }) {
  const [toggleSort, setToggleSort] = useState(false);
  const [query2, setQuery2] = useState("");
  return (
    <div id="search">
      <div id="search2">
        <TbListSearch style={{ fontSize: "45px", marginRight: "10px" }} />
        <input
          value={query2}
          onChange={(event) => {
            setQuery2(event.target.value);
          }}
          type="text"
          placeholder="search"
        />
        <button
          id="searchButton"
          onClick={() => {
            onQueryChange(query2);
          }}
          type="button"
        >
          <FcSearch />
        </button>
        <button
          id="listSort"
          onClick={() => setToggleSort(!toggleSort)}
          type="button"
        >
          <FaCaretSquareDown />
        </button>
        <DropDown
          sortBy={sortBy}
          onSortChange={(mySort) => onSortChange(mySort)}
          toggleSort={toggleSort}
        />
      </div>
    </div>
  );
}

export default ReviewSearch;
