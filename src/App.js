import {useEffect,useState} from 'react'
import { Nav  } from 'react-bootstrap'
import TableComponent from './components/Table'
import './index.css'

function App() {
  const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
  const [currencyArr, setCurrencyArr] = useState([])
  const [requestNumber, setRequestNumber] = useState(localStorage.getItem('requestNumber')||1)
  const [error, setError] = useState(false)
  useEffect(()=>{
    fetch(url)
      .then(res=> res.json())
      .then(body=> {
        setRequestNumber(val=> {
          if(+val===5){
            setError(true);
            localStorage.setItem('requestNumber',1)
            return 0
          }else{
            setError(false);
            localStorage.setItem('requestNumber',+val +1)
            return (+val +1)
          }
        })
        setCurrencyArr(body)
      })
    },[])
  return (
    <div className="App">
      <Nav className="justify-content-start mb-3" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Logo</Nav.Link>
        </Nav.Item>
      </Nav>
      {error? 'error ocured':<TableComponent currencyArr={currencyArr}/>}
    </div>
  );
}

export default App;

