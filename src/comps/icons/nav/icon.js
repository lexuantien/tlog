import PropTypes from "prop-types";
import { Tweet, Home, Search, Notification, Bookmark } from "@comps/icons/nav";

const Icon = ({ name, active }) => {
  switch (name) {
    case "tweet":
      return <Tweet />;
    case "home":
      return <Home active={active} />;
    case "search":
      return <Search active={active} />;
    case "bookmark":
      return <Bookmark active={active} />;
    case "notification":
      return <Notification active={active} />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Icon;
