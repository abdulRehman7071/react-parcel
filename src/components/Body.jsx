import Cards from "./Cards";
import { data } from "../constants";
import { useEffect, useState } from "react";

const Body = () => {
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState(data);

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleChange = (text) => {
    setSearch(text);
    // const filtered = setCards(filtered);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="Apple">
      <div className="searchBar">
        <input
          type="text"
          name=""
          id=""
          className="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="searchBtn">Search</button>
      </div>
      <div className=" cardSection">
        {filteredCards.map((item) => {
          return <Cards key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Body;
