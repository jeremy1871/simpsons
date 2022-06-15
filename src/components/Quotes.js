import React from 'react';

function DisplaySimpsons({ simpsons }) {
  return (
    simpsons && (
      <div className='DisplaySimpsons'>
        <img src={simpsons.image} alt={simpsons.character} />
        
        
            {simpsons.character}
          
            {simpsons.quote}
          
      </div>
    )
  );
}

export default DisplaySimpsons;