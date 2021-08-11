import React from 'react';

import './file_upload.css';

const FileUpload = (props) => {
    return (
        <div id='file_upload' className='form' action="upload.php" method="POST">
            <input type="file" multiple />
            <p>Drag your files here or click in this area.</p>
            <button type="submit">Upload</button>
        </div>
    )
}

export default FileUpload;