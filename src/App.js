import { useState } from "react";
export default function App(){
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [mobile, SetMobile] = useState('');
    const [data, setData] = useState("Data");

    const firstNameChangeHandler = (e) =>{
        SetFirstName(e.target.value);
    }
    const lastNameChangeHandler = (e) =>{
        SetLastName(e.target.value);
    }
    const mobileChangeHandler = (e) =>{
        SetMobile(e.target.value);
    }
    const showData = (e) =>{
        e.preventDefault();
        setData(firstName + '  ' + lastName + '  '+ mobile);
        // console.log(e.target.value);
    }
    return(
        <div>
           <form onSubmit={showData}>
                <input type = "text" placeholder="First Name" onChange={firstNameChangeHandler}/><br/>
                <input type = "text" placeholder="Last Name" onChange={lastNameChangeHandler}/><br/>
                <input type = "text" placeholder="Mobile" onChange={mobileChangeHandler} /><br/>
                <input type = "submit" value="Submit" />
           </form>
           {data}
        </div>
    );
}
