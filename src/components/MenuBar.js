import './Menubar.css'
function MenuBar (){
    return(
      <div className='selection'>
        <body className="selection-bar">
        <select id="options" class="bar">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <select id="options" class="bar">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <select id="options" class="bar">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <button 
        className="button-bar">Browser Space</button>
      </body>
      </div>
    )
}
export default MenuBar