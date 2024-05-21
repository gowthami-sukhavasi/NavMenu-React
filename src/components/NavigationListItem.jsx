import PropTypes from "prop-types";

const NavigationListItem = ({ listChildren }) => {
  console.log("listChildren", listChildren);

  return (
    <>
      {listChildren.map((child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </>
  );
};

export default NavigationListItem;

NavigationListItem.propTypes = {
  listChildren: PropTypes.array,
};
