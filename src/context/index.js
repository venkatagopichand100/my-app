import { createContext, useState } from "react";

const MyContext = createContext();
const MyProvider = (props) => {
    const [active, setActive] = useState(true);
    const [users, setUsers] = useState([
        {id: 1, name: "rohit"},
        {id: 2, name: "Sachin"},
        {id: 3, name: "dravid"},
        {id: 4, name: "laxman"},
        {id: 5, name: "zahirkhan"},
    ])

    const addUser = (name) => {
        setUsers(prevState => (
            [
                ...prevState,
                {id:6, name: name}
            ]

        ))
    }

    return(
        <MyContext.Provider value = {{
            users: users,
            addUser: addUser,
            setUsers: setUsers,
            activeState: active,
            setActive: () => setActive(!active)

        }}>
            {props.children}
        </MyContext.Provider>

    )
}

export {MyContext, MyProvider}


