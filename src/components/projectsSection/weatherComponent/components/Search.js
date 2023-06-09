import React, { useState } from "react";
import "./css/search.css";
import { FaSistrix } from "react-icons/fa";
function Search({ ad, err }) {
  const [address, setNewAddress] = useState("");
  const handleinputVal = (e) => setNewAddress(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Enter was clicked");
      console.log(address);
      ad(address);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search an address"
        onChange={handleinputVal}
        onKeyDown={handleKeyDown}
      />
      <FaSistrix
        style={{ position: "absolute", color: "white", right: 5, top: 7 }}
      />
      <p>{err}</p>
    </div>
  );
}

export default Search;
