import React, {useState} from 'react'
import closeIcon from '../assets/svg/window-close-regular.svg'
import editIcon from '../assets/svg/edit-solid.svg'
import checkIcon from '../assets/svg/check-solid.svg'
const TableInput = ({inputValue}) => {
    const [edit, setEdit] = useState(false)
    const handleInputChange = ()=>{
        console.log('smth')
    }
    return (
        <>
            <input className="table-input" type="text" value={inputValue} onChange={handleInputChange} />  
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
