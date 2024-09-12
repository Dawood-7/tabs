import { useEffect, useState } from 'react'
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = "https://www.course-api.com/react-tabs-project";


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if(!resp.ok){
          setIsLoading(false)
        }
        const response = await resp.json();
        setData(response)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])
  
  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <BtnContainer data={data} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      <JobInfo data={data} currentItem={currentItem}/>
    </div>
  )
}

export default App
