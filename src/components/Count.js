import {memo} from 'react';
const Count = ({count}) => {
    console.log("1 count")

    return (
        <>
            <h2>This is count player component {count}</h2>
        </>
    )
}

export default memo(Count)