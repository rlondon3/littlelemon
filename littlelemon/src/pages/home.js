import React from 'react';
import CallToAction from '../components/callToAction';
import Specials from '../components/specials';
import Footer from '../components/footer';

const Home = ({ formData, availableTimes, handleChange, dispatch, submitForm }) => {
    return ( 
        <>
            <CallToAction
              formData={formData}
              availableTimes={availableTimes}
              handleChange={handleChange}
              dispatch={dispatch}
              submitForm={submitForm}
             />
            <Specials />
            <Footer />
        </>
     );
}
 
export default Home;