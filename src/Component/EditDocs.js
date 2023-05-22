import { Button } from '@mui/base';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../Styles/Editdocs.css';

function EditDocs() {
  const [data,setData] = useState('')
  const [title,setTitle] = useState('')
  const updateData = (e) =>{
    setData(e);
    //console.log(data)
  }
  const shareData = () =>{
      let val = prompt('enter document title');
      setTitle(val);
       console.log(title);
  }
  return (
    <div className='editdocs '>
      <Button variant="contained" className='share-btn' onClick={shareData}>
  Share 
</Button>
      <ReactQuill className='editor'  value={data} onChange={updateData}/>
    </div>
  )
}

export default EditDocs
