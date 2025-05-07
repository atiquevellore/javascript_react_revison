//rfc

/* react fiber algorithm perform the dom manipulation efficently basically it manipulates the DOM by creating a virtual
  DoM which representation of actual dom if find the difference b/w old v dom and new v dom and renders it quickly example is key inside the map elements
*/
function ComponentName(props) {
    const [count, setCount] = useState(0)
    return (
        <>
        <h1> html code</h1>
        <button onclick = {() =>setCount(count+1)}>Click</button>
        </>
    )
}

//rcc

class ComponentName extends Component {

    useEffect(()=>{
        console.log("Called once")
    },[])
    useEffect(()=>{
        console.log("Called upon every component render")
    })
    useEffect(()=>{
        console.log("Called upon changes in dependency ")
    },[dependency])
    constructor(props) {
        super(props)
        this.state ={
            count: 0
        }
    }

    updateCount(){
        this.setState ({
            count : this.state.count + 1
        })
    }
}



