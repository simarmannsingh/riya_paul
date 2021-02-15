import React, { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import '../UploadForm/UploadForm.css'

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const handleFileChange = (e) => {
        let selected =  e.target.files[0]
        
        if(selected && types.includes(selected.type))
        {
            setFile(selected)
            setError('')
        }
        else
        {
            setFile(null)
            setError('Please select an image file (png/jpeg)')
        }
        console.log(selected);

        console.log(selected.name);
    }

    return(
        <form className="Upload-form">
            <label>
                <input type="file" onChange={handleFileChange}/>
                <span className="span">+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div className="progress_container"><ProgressBar file={file} setFile={setFile} /></div> }
                { file && <div className="file_name">Uploading "{file.name}" to server.</div> }
            </div>
        </form>
    )

}

export default UploadForm