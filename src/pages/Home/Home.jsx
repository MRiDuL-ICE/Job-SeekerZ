import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import JobCategories from './JobCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;