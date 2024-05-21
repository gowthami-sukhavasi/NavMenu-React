import PropTypes from "prop-types";
import NavigationListItem from "./NavigationListItem";
import { useEffect, useState } from "react";
const NavigationList = ({ items }) => {
  console.log("items", items);

  const [childLink, setchildLink] = useState(false);

  useEffect(() => {
    console.log("status", childLink);
  });

  return (
    <ul
      className="nav-items"
      onMouseEnter={() =>
        items.children.length > 0 ? setchildLink(true) : setchildLink(false)
      }
      onMouseLeave={() => setchildLink(false)}
    >
      <span>{items.name}</span>
      {childLink && <NavigationListItem listChildren={items.children} />}
    </ul>
  );
};

export default NavigationList;

NavigationList.propTypes = {
  items: PropTypes.object,
};
