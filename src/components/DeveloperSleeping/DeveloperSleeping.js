import React from 'react';
import BlackLogoHeader from '../BlackLogoHeader/BlackLogoHeader';
import './DeveloperSleeping.css'

const DeveloperSleeping = () => {
    return (
        <div>
            <div className='container'>
                <BlackLogoHeader />
            </div>
            <div className="d-flex justify-content-center">
                <div className='dev-card mt-5'>
                    <h1 className="text-success">Ahh! Developer is Sleeping</h1>
                    <h3 className="text-dark">Coming soon!</h3>
                    <h5 className="text-dark">Developer are human to try to understand!</h5>
                    <h5 className="text-dark">Why so rush? (Kidding)</h5>
                    <h5 className="mt-3">Dev: Anik Sarker</h5>
                    <p className="font-weight-bold text-info">Email: AnikSarker1612@gmail.com</p>
                </div>
                
            </div>
        </div>

    );
};

export default DeveloperSleeping;