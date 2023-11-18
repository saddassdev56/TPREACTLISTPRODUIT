
export function Checkbox  ({ checked, label,onChange ,id} ) {
    return <div className="form-check">
        <input type="checkbox"
        id={id}
         className="form-check-input"
         checked={checked} 
         onChange={(e)=>onChange(e.target.checked)}>
        </input>
        <label htmlFor={id} className="forn-check-label"> {label}</label>
    </div>
}