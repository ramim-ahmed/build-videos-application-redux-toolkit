import React from 'react';
import VideosGrid from '../components/grid/VideosGrid';
import Tags from '../components/tags/Tags';
import Pagination from '../components/ui/Pagination';

const Home = () => {
    return (
        <>
            <Tags />
            <VideosGrid />
            <Pagination />
        </>
    )
}

export default Home