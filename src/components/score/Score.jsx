import { useState } from "react";

export function Score() {
    const [homeCount, setHomeCount] = useState(0);
    const [guestCount, setGuestCount] = useState(0);
    function updateHomeCount1 () {
        setHomeCount(homeCount + 1);
    }
    function updateHomeCount2() {
        setHomeCount(homeCount + 2);
    }
    function updateHomeCount3 () {
        setHomeCount(homeCount + 3);
    }
    function updateGuestCount1 () {
        setGuestCount(guestCount + 1);
    }
    function updateGuestCount2() {
        setGuestCount(guestCount + 2);
    }
    function updateGuestCount3 () {
        setGuestCount(guestCount + 3);
    }
   return (
    <>
        <div className="score">
            <div>Home</div>
            <div>{homeCount}</div>
            <div>:</div>
            <div>{guestCount}</div>
            <div>Guest</div>
        </div>
         <div className="btn">
            <div className="home">
                <button onClick={updateHomeCount1}>+1</button>
                <button onClick={updateHomeCount2}>+2</button>
                <button onClick={updateHomeCount3}>+3</button>
            </div>
            <div className="guest">
                <button onClick={updateGuestCount1}>+1</button>
                <button onClick={updateGuestCount2}>+2</button>
                <button onClick={updateGuestCount3}>+3</button>
            </div>
        </div>
    </>
   );
}