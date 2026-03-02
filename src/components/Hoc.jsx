function withBorder(WrappedComponent){
    return function newComponent(props){
        return(
            <div style={{border:'2px solid blue', padding:'10px'}}>
                <WrappedComponent/>
            </div>
        );
    }
}

function Greeting({name}){
    return <h1>Hello, {name}</h1>;
}

const GreetingWithBorder = withBorder(Greeting);
function Hoc(){
    return (
        <div>
            <Greeting name='John'/>
            <GreetingWithBorder name="Jane"/>
        </div>
    )
}
export default Hoc;