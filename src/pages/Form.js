import React, { useState } from "react";

const Form = ({initialPost, handleSubmit, buttonLabel, loadPost}) => {
    const [park, setPark] = useState(null);
    const [formData, setFormData] = useState(initialPost);
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        handleSubmit(formData);
    };
    
    return (
        <form onSubmit={handleSubmission}>
            <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
                placeholder="BLM location name"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.coordinates}
                name="coordinates"
                placeholder="coordinates"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.posting}
                name="posting"
                placeholder="details"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.image}
                name="image"
                placeholder="image url"
            />
            <input type="submit" value={buttonLabel}/>
        </form>
    );
};

export default Form;