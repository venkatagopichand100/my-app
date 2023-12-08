import {memo} from 'react';
const PlayerBtn = ({handlePlayer}) => {
    console.log("5 PlayerBtn")

    return (
        <>
            <button onClick={handlePlayer}>Increment the player button</button>
        </>
    )
}

export default memo(PlayerBtn)