import React, { useContext, useEffect, useState } from 'react';
import './HomeBanner.css'
import { Link, useHistory } from 'react-router-dom';
import fakeData from '../../fakedata';
import { SelectPlaceContext } from '../../App';

const HomeBanner = () => {
    const [selectedPlace, setSelectedPlace] = useContext(SelectPlaceContext)

    let history = useHistory()

    const [places] = useState(fakeData);

    const handlePlaceLink = (id) => {
        const selectPlace = places.find(place => place.id === id);
        console.log(selectPlace);
        setSelectedPlace(selectPlace);
    }

    useEffect(() => {
        setSelectedPlace(places[0])
    }, []);

    const handleBooking = (place) => {
        history.push('/booking/' + place.name)
    }

    return (
        <div className='home-banner-section row container d-flex justify-content-between mt-5 pt-5'>
            <div className='col-md-6 ml-5 pl-5'>
                <h1 style={{ fontFamily: 'Bebas Neue' }} className='text-white'>{selectedPlace.name}</h1>
                <p style={{ fontFamily: 'Montserrat' }} className='text-white'>
                    {selectedPlace.desc}
                </p>
                <Link className='btn btn-md btn-warning font-weight-bold mb-3 mb-md-0' onClick={() => handleBooking(selectedPlace)}>Booking &#8594;</Link>
            </div>
            <div className='col-md-4 d-md-flex'>
                {
                    places.map(place => {
                        return (
                            <div className='banner-img mb-md-0 mb-3 ml-md-0 pl-md-0 ml-5 pl-4'>
                                <Link onClick={() => handlePlaceLink(place.id)}>
                                    <img className='link-img' id='active' src={place.img} alt="" />
                                    <h4 className='photo-text text-white ml-4'>{place.name}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HomeBanner;