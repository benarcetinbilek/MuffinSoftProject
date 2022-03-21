import { useState, useEffect } from "react";
import "./createTimeTable.css"


function CreateTimeTable() {
    const [descriptionOn, setDescriptionOn] = useState(true)
    const [data, setData] = useState([])

    const [box, setBox] = useState()
    
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [newId, setNewId] = useState()
    const [newIdd, setNewIdd] = useState()

    useEffect(() => {
        fetch("http://127.0.0.1:8000/app/schedule/",{
          method:'GET',
          headers: {
            'Content-Type':'application/json',
     
          }
        })
        .then( resp => resp.json())
        .then( resp => setData(resp))
        .catch( error => console.log(error))
      }, [])
    
    const onclick=(i, idx)=>{
        let indexOfState = data[i].box[idx]
        console.log(indexOfState)
        setTitle(indexOfState.title)
        setDescription(indexOfState.description)
        setNewId(i)
        setNewIdd(idx)
    }

    
    const onSubmit = () => {
        data[newId].box[newIdd].title = title
    }
    
  return (          
        <div className="containerCreateTimeTable">              
            <div className="timetableContent" >
                <table> 
                    <tbody>               
                        <tr>
                            <th></th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr> 
                    </tbody>                   
                    {data ? <> {data.map((dataa,i) => {
                        return (
                            <tbody key={dataa.id}>
                                <tr >                                
                                    <th key={dataa.id} onClick={()=>{console.log(data)}}>{dataa.id}</th>
                                    {dataa.hours.map((boxa, idx) => {
                                        return <td key={boxa.id}  onClick={()=>{onclick(i, idx)}}>{boxa.id}</td>
                                    })}                        
                                </tr>
                            </tbody>    
                        )
            })}              </>: null}
                </table>
            </div>
            {descriptionOn ? 
                <div className="containerDescription"> 
                    
                        <p>Description Of Plan</p>
                        <textarea 
                            placeholder="Title" 
                            rows={1}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                        <textarea 
                            placeholder="Description" 
                            rows={7} 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                        <button onClick={onSubmit} >submit</button>
                    
                </div>                
            : <></>}            
        <div className="data">
            <p>asd</p>
            <p>asd</p>
        </div>
        </div>      
  );
}
export default CreateTimeTable;
