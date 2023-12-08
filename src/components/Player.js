import {memo} from 'react';
const Player = ({player}) => {
    console.log("4 Player")

    return (
        <>
            <h2>This is count player component {player}</h2>
        </>
    )
}

export default memo(Player)