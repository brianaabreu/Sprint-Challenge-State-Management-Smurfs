import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/actions';

const Smurfs = props => {

    return (
        <>
            <div>
                {props.smurfs.map(smurf =>( 
                    <div className='smurf-background' key={smurf.id}>
                        <h2 className='smurf1'>Name: {smurf.name} Age: {smurf.age} Height: {smurf.height} </h2>
                    </div>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(Smurfs); 