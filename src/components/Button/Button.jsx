import React from 'react';

function Button({ type, labelButton, style, onClick }) {
  const buttonStyle = () => {
    if (style === 'primary') {
      return 'bg-primary text-white px-4 py-2 ';
    }else if(style === 'secondary'){
        return 'bg-white px-4 py-2 '
    }else if(style === 'secondary-outline'){
      return 'bg-white text-primary px-4 py-2  border border-primary'
  }
  
  };

  return (
    <button type={type} className={`font-semibold rounded ${buttonStyle()}`} onClick={onClick}>
      {labelButton}
    </button>
  );
}

export default Button;
