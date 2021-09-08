import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { Spinner } from "@comps/core";

const LoadingContext = React.createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  
  const [loading, setLoading] = useState(false);

  const value = {
    loading: loading,
    show: () => setLoading(true),
    hide: () => setLoading(false),
  };

  return (
    <LoadingContext.Provider value={value}>
      {loading && <Spinner />}
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node,
};
