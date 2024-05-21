import NavigationList from "./NavigationList";
import PropTypes from "prop-types";

const Navigation = ({ navData }) => {
  const itemData = Object.values(navData);
  console.log("itemData", itemData);

  return (
    <nav className="nav-list">
      {itemData.map((items, index) => (
        <NavigationList key={index} items={items} />
      ))}
    </nav>
  );
};
export default Navigation;

Navigation.propTypes = {
  navData: PropTypes.object,
};
