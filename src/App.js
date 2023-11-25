// import SunShine from './assets/sunshine.png'

const randomNames = ["ram", "laxman", "shivan"];

function getRandomNames(max){
    return Math.floor(Math.random() * (max + 1));
}

function Header(){
    const headerNames = randomNames[getRandomNames(2)]
    return(
        <header>
            {/* <img src = {SunShine} alt = "some image"/> */}
            <p>
                My name is {headerNames}
            </p>
        </header>
    );
}

function Footer(){
    return(
        <header>
            <p>
                I am from the header component
            </p>
        </header>
    );
}

function App(){
    return(
        <div>
            <Header />
            <h1> I am from App component</h1>
            <Footer />
        </div>
    )
}

export default App;