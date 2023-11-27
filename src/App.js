import Hello from "./component/Hello"
import Message from "./component/Message";
import PropHello from "./component/PropHello";
function App(){
    return(
        <h1>
            <Hello /> 
            <Message />
            <PropHello name = "venkat"/>
            <PropHello name = "sachin"/>
            <PropHello name = "dravid"/>
            <PropHello name = "kohil"/>
            <PropHello name = "rohit"/>
        </h1>
    )
}
export default App;




