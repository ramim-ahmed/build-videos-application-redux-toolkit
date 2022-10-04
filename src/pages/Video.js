import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Player from '../components/descriptions/Player'
import VideoDescrption from '../components/descriptions/VideoDescrption'
import Footer from '../components/footer/Footer'
import RelatedVideos from '../components/list/RelatedVideos'
import Navbar from '../components/navbar/Navbar'
import Loading from '../components/ui/Loading'
import { fetchVideo } from '../features/video/videoSlice'

const Video = () => {
    const { video, isLoading, isError, error } = useSelector(state => state.video)
    const dispatch = useDispatch();
    const { videoId } = useParams();

    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId]);

    const { id, tags, link, title, description, date } = video || {};

    // decide what to do render
    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>
    };

    if (!isLoading && !isError && !video.id) {
        content = <div className="col-span-12">video no found!!</div>
    }
    if (!isLoading && !isError && video.id) {
        content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
                <Player link={link} title={title} />


                <VideoDescrption title={title} description={description} date={date} />

            </div>

            <RelatedVideos currentId={id} tags={tags} />

        </div>
    }

    return (
        <>
            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    {content}
                </div>
            </section>
        </>
    )
}

export default Video