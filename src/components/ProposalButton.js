import React, { useState } from 'react'
import "./ProposalButton.css";

function ProposalButton() {
    const [proposed,setProposed] = useState(false);

    const handlePropose = () => {
        setProposed(true)
    }

  return (
    <div className='proposal-button-container'>
        {!proposed?(
        <button className='propose-button' onClick={handlePropose}>
            Will You Marry Me?</button>
        ):(
        <div className='proposal-message'>
            <h2>She Said Yes! 💍</h2>
            <p>I can't wait to spend the rest of my life with you. </p>
        </div>
        )}
    </div>
  )
}

export default ProposalButton