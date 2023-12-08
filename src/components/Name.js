import {memo} from 'react';
const Name = () => {
    console.log("3 Name")

    return (
        <>
            <h2>Player Name</h2>
        </>
    )
}

export default memo(Name)