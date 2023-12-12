// import User from "./components/User";
// const App = () => {
//     const users = [
//         {id: 1, name: "rohit"},
//         {id: 2, name: "Sachin"},
//         {id: 3, name: "dravid"},
//         {id: 4, name: "laxman"},
//         {id: 5, name: "zahirkhan"},
//     ]

//     return(
//         <>
//             <User users = {users}/>
//         </>
//     )
// }

// export default App;

import User from "./components/User";
import { MyProvider } from "./context";
const App = () => {
    return(
        <>
            <MyProvider>
                <User />
            </MyProvider>
        </>
    )
}

export default App;