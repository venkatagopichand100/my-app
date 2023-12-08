import {memo} from 'react';
const CountBtn = ({handleCount}) => {
    console.log("2 CountBtn")

    return (
        <>
            <button onClick={handleCount}>Increment the player count</button>
        </>
    )
}

export default memo(CountBtn)