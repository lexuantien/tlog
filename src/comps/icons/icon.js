import PropTypes from "prop-types";
import {
  Setting,
  Tweet,
  Home,
  Search,
  Notification,
  Bookmark,
  Back,
  Apple,
  Google,
  Facebook,
  Github,
  ShareApple,
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
    case "apple":
      return <Apple />;
    case "google":
      return <Google />;
    case "facebook":
      return <Facebook />;
    case "github":
      return <Github />;
    case "share":
      return <ShareApple />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Icon;
