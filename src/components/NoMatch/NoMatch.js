import React from 'react';
import errorImg from '../../images/Image/error-404.jpg'
import './NoMatch.css'
import Box from '@material-ui/core/Box';

const NoMatch = () => {
    return (
        <div className="bg-white">
            <Box textAlign="center" m={1}><img src={errorImg} alt="page-not-found"/></Box>
        </div>
    );
};

export default NoMatch;