import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectionTags, removeSelectionTags } from '../../features/tagsFilter/tagsFilterSlice';

const Tag = ({ title }) => {

    const { tagsSelection } = useSelector(state => state.tagsSelection);

    const dispatch = useDispatch();
    const isSelected = tagsSelection.includes(title);

    const handleTagsSelection = () => {
        if (isSelected) {
            dispatch(removeSelectionTags(title))
        } else {
            dispatch(addSelectionTags(title))
        }
    };

    const styleSelectedTags = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

    return (

        <div
            onClick={handleTagsSelection}
            className={styleSelectedTags}
        >
            {title}
        </div>
    )
}

export default Tag