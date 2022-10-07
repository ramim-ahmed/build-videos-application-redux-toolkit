import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetSearch } from '../../features/search/searchSlice';
import { fetchTags } from '../../features/tags/tagsSlice';
import { resetTags } from '../../features/tagsFilter/tagsFilterSlice';
import Tag from './Tag'

const Tags = () => {
    const { tags } = useSelector(state => state.tags);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch]);

    const handleReset = () => {
        dispatch(resetTags());
        dispatch(resetSearch());
    }
    return tags?.length > 0 ? (
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between items-center border-b"
            >
                <div className='flex gap-2 overflow-y-auto'>
                    {
                        tags.map(tag => <Tag key={tag.id} title={tag.title} />)
                    }
                </div>
                <div className=''>
                    <button onClick={handleReset} type='button' className='border px-6 py-1'>reset</button>
                </div>
            </div>
        </section>
    ) : null;
}

export default Tags
