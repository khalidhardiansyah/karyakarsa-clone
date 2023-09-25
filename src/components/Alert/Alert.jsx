import React from 'react'

function Alert({title, description, style}) {
    function alertStyle() {
        if (style === "yellow") {
            return "bg-yellow-300"
        } else if(style === "pink"){
            return "bg-pink-100" 
        }else if(style === "blue"){
            return "bg-blue-100"
        }
    }
  return (
  <div>
    <div className={`wrapper p-5 ${alertStyle()}`}>
        <p>{title}</p>
        <div className="description">
            {description}
        </div>
    </div>
</div>
  )
}

export default Alert