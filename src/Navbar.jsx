import { useState } from 'react';
import './Navbar.scss'

const Navbar = () => {
    const [inputValue, setInputValue] = useState('');
    const [secondInputeValue, setSecondInputeValue] = useState('');
    const [positiveValue, setPositiveValue] = useState({});
    const [nonPositiveValue, setnonPositiveValue] = useState({});

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
      const handleChange = (e) => {
        setSecondInputeValue(e.target.value);
      };
    const handleClick = (textValue) => {
        const values = Object.entries(positiveValue)
        const index = values.length + 1
        let value = positiveValue
        if(inputValue.trim() != ''){
             value[index] =inputValue
             setPositiveValue(value)
        }      
        setInputValue('')
      };
    const handleClick1 = () => {
        const values = Object.entries(nonPositiveValue)
        const index = values.length + 1
        let value = nonPositiveValue
        if(secondInputeValue.trim() != ''){
             value[index] =secondInputeValue
             setnonPositiveValue(value)
        }      
        setSecondInputeValue('')
      };
    return(
        <div>
        <div className="d-flex">
            <div  style={{height:'50px'}}>
                <input
                    placeholder='Enter something'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className="ms-3 me-3 btn-blue"
                        onClick={handleClick}>Add</button>
                <div>
                    <ul>
                    {Object.entries(positiveValue).map((item) => (
                        <li className='text-start' key={item[0]}>{item[1]}</li>
                    ))}
                    </ul>
                </div>
            </div>
            <div style={{height:'50px'}}>
                <input
                    placeholder='Enter something'
                    value={secondInputeValue}
                    onChange={handleChange}
                />
                <button className="ms-3 btn-blue"
                        onClick={handleClick1}>Add</button>
                <div>
                    <ul>
                        {Object.entries(nonPositiveValue).map((item) => (
                            <li className='text-start' key={item[0]}>{item[1]}</li>
                    ))}
                    </ul>
                </div>
            </div>

        </div>
        </div>
    )
}
export default Navbar