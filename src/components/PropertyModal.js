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

    console.log(formData)
    
    return (
        <form>
            <div className="property-modal-close">X</div>
            <h1>Add a property</h1>
            <input 
                type="text"
                placeholder="street number"
                onChange={handleChange}
                name="number"
            />
            <input 
                type="text"
                placeholder="street name"
                onChange={handleChange}
                name="street"
            />
            <input 
                type="text"
                placeholder="city"
                onChange={handleChange}
                name="city"
            />
            <input 
                type="text"
                placeholder="state"
                onChange={handleChange}
                name="state"
            />
            <input 
                type="text"
                placeholder="zip code"
                onChange={handleChange}
                name="zip"
            />
            <input 
                type="text"
                placeholder="monthly rent"
                onChange={handleChange}
                name="rent"
            />
        </form>
    )
}

export default PropertyModal