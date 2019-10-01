import React from 'react';
import {connect} from'react-redux';

const SongDetail=(props)=>{
    console.log(props);
    return (
        <div>
   songDetail
        </div>
    );
};

const mapStateToProps=(state)=>{
    return {song:state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);