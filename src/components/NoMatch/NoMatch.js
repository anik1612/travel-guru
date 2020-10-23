import React from 'react';
import errorImg from '../../images/Image/error-404.jpg'
import './NoMatch.css'
import Box from '@material-ui/core/Box';
import BlackLogoHeader from '../BlackLogoHeader/BlackLogoHeader';

const NoMatch = () => {
    return (
        <div className='no-match-section'>
            <div className='container'>
                <BlackLogoHeader />
            </div>
            <div className="bg-white">
                <Box textAlign="center" m={1}><img src={errorImg} alt="page-not-found" /></Box>
            </div>
        </div>

    );
};

export default NoMatch;