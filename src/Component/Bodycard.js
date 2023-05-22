import React from "react";
import '../Styles/Bodycard.css'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


function Bodycard() {
  const navigate = useNavigate();
  return (
    <div className="bodycard-container">
      <div class="card">
        <span onClick={()=>{
                 navigate('/editdoc')
        }}><AddIcon  style={{fontSize:'xx-large'
    }}/></span>
        
      </div>
    </div>
  );
}

export default Bodycard;
