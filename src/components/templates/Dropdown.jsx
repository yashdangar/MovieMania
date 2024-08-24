import React from 'react'

function Dropdown({title,options,func}) {
  return (
    <div>
        <select defaultValue="0" onChange={func} className='rounded-md px-3 py-1 text-zinc-200' name="format" id="format">
            <option value="0" disabled>
                {title}
            </option>
            {options.map((o,i)=>(
                <option key={i} value={o}> {o.toUpperCase()}</option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown