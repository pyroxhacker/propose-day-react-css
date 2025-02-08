import React from 'react'
import "./MemoryGallery.css";

function MemoryGallery() {
    const memories = [
        {id:1,src:"https://plus.unsplash.com/premium_photo-1676690611480-38582b52220f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Memory 1"},
        {id:2,src:"https://plus.unsplash.com/premium_photo-1676690615192-32c9f3ebe3bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Memory 2"},
        {id:3,src:"https://plus.unsplash.com/premium_photo-1676690620590-0b4d89bd05ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Memory 3"},
        {id:4,src:"https://plus.unsplash.com/premium_photo-1676690624558-d05cf3f1d1bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Memory 4"},
    ];
  return (
    <div className='memory-gallery'>
        <h2>Our Memories</h2>
        <div className='memory-grid'>
            {memories.map((memory)=>(
                <div key={memory.id} className='memory-item'>
                  <img src={memory.src} alt={memory.alt} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default MemoryGallery