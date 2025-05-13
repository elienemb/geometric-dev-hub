
import React from 'react';

const GeometricShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Purple circle - top left */}
      <div 
        className="shape-circle w-[300px] h-[300px] absolute -left-20 -top-20 animate-rotate-slow" 
        style={{ animationDelay: '0s' }}
      ></div>
      
      {/* Green square - top right */}
      <div 
        className="shape-square w-[200px] h-[200px] absolute -right-10 top-40 animate-float" 
        style={{ animationDelay: '1s', transform: 'rotate(15deg)' }}
      ></div>
      
      {/* Purple circle - middle right */}
      <div 
        className="shape-circle w-[150px] h-[150px] absolute right-20 top-[40%] animate-float" 
        style={{ animationDelay: '2s' }}
      ></div>
      
      {/* Green square - bottom left */}
      <div 
        className="shape-square w-[250px] h-[250px] absolute -left-40 bottom-40 animate-rotate-slow" 
        style={{ animationDelay: '1.5s', transform: 'rotate(30deg)' }}
      ></div>
      
      {/* Triangle - bottom right */}
      <div 
        className="shape-triangle absolute -right-20 -bottom-20 animate-float" 
        style={{ animationDelay: '3s', transform: 'rotate(15deg)' }}
      ></div>
    </div>
  );
};

export default GeometricShapes;
