import React from 'react'

export default function Abstract({option, onSelect}) {
  const handleChange = (e)=>{
    onSelect(e.target.id)
  }
  return (
    <select onChange={handleChange}>
      {option.map((value)=>(
        <option id={value.value}>{value.text}</option>
      ))}
    </select>
  )
}
