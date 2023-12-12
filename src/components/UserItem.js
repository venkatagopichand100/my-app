import { useContext } from "react";
import { MyContext } from "../context";

const UserItem = () => {
    const context = useContext(MyContext);
    console.log(context);
    return (
        <>
            {context.activeState ? context.users.map(user =>
                <div key = {user.id}>
                    <div>Name: {user.name}</div>
                </div>

                ): null}

                <button onClick={context.setActive}>Toggle Me</button>

             <hr />
             <button onClick={() => context.addUser('venkat')}>Toggle Me</button>

             <hr />
             <button onClick = {() => context.setUsers(
                prevState => (
                    [
                        ...prevState,
                        {id: 7, name: "something"}
                    ]
                )

             )}>Add the User</button>
        </>
    )
}

export default UserItem