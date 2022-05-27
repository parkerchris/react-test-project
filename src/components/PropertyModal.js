import React,{ useState } from 'react'


function PropertyModal() {
    
    const [ formData, setFormData ] = useState(
        {
            number: "", 
            street: "", 
            city: "", 
            state: "", 
            zip: "", 
            rent: ""
        }
    )


    function handleChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input 
                type="text"
                placeholder="enter a street number"
                onChange={handleChange}
                name="number"
            />
            <input 
                type="text"
                placeholder="enter a street name"
                onChange={handleChange}
                name="street"
            />
            <input 
                type="text"
                placeholder="enter a city"
                onChange={handleChange}
                name="city"
            />
            <input 
                type="text"
                placeholder="enter a state"
                onChange={handleChange}
                name="state"
            />
            <input 
                type="text"
                placeholder="enter a zip code"
                onChange={handleChange}
                name="zip"
            />
            <input 
                type="text"
                placeholder="enter monthly rent"
                onChange={handleChange}
                name="rent"
            />
        </form>
    )
}

export default PropertyModal