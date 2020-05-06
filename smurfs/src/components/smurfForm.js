import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions/actions";

const SmurfForm = (props) => {
  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <div>Loading your smurf village!</div>
      ) : (
        <button className="view" onClick={handleGetData}>View Smurf Village</button>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData })(SmurfForm);
