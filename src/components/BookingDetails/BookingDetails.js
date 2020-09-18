import React, { useState } from 'react';
import hotelFakeData from '../../hotelFakeData';
import BlackLogoHeader from '../BlackLogoHeader/BlackLogoHeader';
import star from '../../images/Icon/star_1_.png';
import './BookingDetails.css'
import Map from '../Map/Map';

const style = {
    width: '200px',
    height: '150px',
    border: '3px solid lightgrey',
    borderRadius: '5px'
}

const BookingDetails = () => {

    const hotel = hotelFakeData.slice(0, 3);
    const [hotels] = useState(hotel);

    return (
        <div className='container-fluid mb-5'>
            {/* black logo header */}
            <div className='container border-bottom'>
                <BlackLogoHeader />
            </div>

            {/* hotel details */}
            <div className='row mt-3 justify-content-between'>
                <div className='col-md-5 ml-3'>
                    {
                        hotels.map(hotel => {
                            return (
                                <div className='row border rounded mb-2 hotel-card d-flex align-items-center p-2'>
                                    <div className='col-md-4 mr-2'>
                                        <img src={hotel.img} style={style} alt="" />
                                    </div>

                                    <div className='col-md-7'>
                                        <ul className='p-0 pl-md-5'>
                                            <li>
                                                <h4 className="text-dark mt-2 mt-md-0">{hotel.name}</h4>
                                            </li>
                                            <li>
                                                {hotel.spec}
                                            </li>
                                            <li>
                                                {hotel.wifi}
                                            </li>
                                            <li>
                                                {hotel.cancel}
                                            </li>

                                            <div className='d-flex justify-content-around'>
                                                <div>
                                                    <img src={star} style={{ width: '20px' }} alt="" />
                                                    {hotel.star}({hotel.available})
                                                </div>
                                                <div className='font-weight-bold'>
                                                    ${hotel.price}/night
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* google map */}
                <div className='col-md-6'>
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;