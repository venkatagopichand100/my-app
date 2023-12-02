

export default function App(){

    const getData = (e) =>{
        e.preventDefault();
        console.log("form is submitted")
    }
    return(
        <div>
            <form onSubmit={getData}>
                <input type = "text" />
                <br />
                <input type = "text" />
                <br />
                <input type = "submit" value="submit" />
            </form>

        </div>
    );
}


