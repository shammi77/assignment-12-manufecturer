import React from 'react';
import Banner from './Banner';
import Summary from './Summary';
import Reviews from './Reviews';
import Footer from '../../components/Footer';
import AvailableParts from '../../pages/Home/Parts/AvailableParts'
import ExtraPart from './ExtraPart';
import LatestPart from './LatestPart';


const Home = () => {
    return (
        <div>
            <Banner/>
            <ExtraPart></ExtraPart>
            <AvailableParts/>
            <Summary/>
            <Reviews />
            <LatestPart></LatestPart>
            <Footer/>
        </div>
    );
};

export default Home;