import React, {useState} from 'react'
import closeIcon from '../assets/svg/window-close-regular.svg'
import editIcon from '../assets/svg/edit-solid.svg'
import checkIcon from '../assets/svg/check-solid.svg'
const TableInput = ({value}) => {
    const [inputValue, setInputValue] = useState(value)
    const [isCorrectValue, setIsCorrectValue] = useState(true)
    const [edit, setEdit] = useState(false)
    const handleInputChange = (e)=>{
        const newValue = e.target.value
        setInputValue(newValue)
        const maxValue = 1.1 * value
        const minValue = 0.9 * value
        if(newValue<)
    }
    return (
        <>
            <input className="table-input" type="text" onFocus={()=>setEdit(true)} onBlur={()=>setEdit(false)} value={inputValue} onChange={handleInputChange} />  
            <div className="icon-set">
                {edit?(
                    <div className="group-save">
                        <img className="save-icon" src={checkIcon} alt="save-icon" />    
                        <img className="close-icon" src={closeIcon} alt="close-icon" />    
                    </div> 
                ):(
                    <div className="group-edit">
                        <img className="edit-icon" src={editIcon} alt="edit-icon" />    
                    </div>
                )}
            </div> 
        </>
    )
}

export default TableInput
