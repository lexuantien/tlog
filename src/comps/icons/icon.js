import PropTypes from "prop-types";
import {
  Setting,
  Tweet,
  Home,
  Search,
  Notification,
  Bookmark,
  Back,
} from "@comps/icons";

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
    case "setting":
      return <Setting />;
    case "back":
      return <Back />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Icon;
