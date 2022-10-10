import React from 'react';
import Banner from './Carousel/Carousel';
import Footer from './Footer/Footer';
import Help from './HelpUs/Help';
import Navigation from './Navigation/navigation';
import Objective from './Objective/Objective';
import Partnars from './Partnars/Partnars';
import Social from './Social/Social';
import Speakers from './Speakers/Speakers';
import UpComingEvents from './UpComingEvents/UpComingEvents';
import Welcom from './Welcome/Welcom';
// import CounterUpPage from './CounterUpPage/CounterUpPage';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Welcom></Welcom>
            <Objective></Objective>
            <Help></Help>
            <UpComingEvents ></UpComingEvents>
            <Speakers></Speakers>
            <Social></Social>
            <Partnars></Partnars>
            <Footer></Footer>
            {/* <CounterUpPage></CounterUpPage> */}
            
        </div>
    );
};

export default Home;