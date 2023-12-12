import User from "./components/User";
import Calc from "./components/Calc";

import { MyProvider } from "./context";
const App = () => {
    return(
        <>
            <MyProvider>
                {/* <User /> */}
                <Calc />
            </MyProvider>
        </>
    )
}

export default App;