//For edit and new
import React, { useState } from "react";

const Form = ({initialPost, handleSubmit, buttonLabel, history }) => {
    const [formData, setFormData] = useState(initialPost);
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        handleSubmit(formData);
        history.push("/");
    };
    
    return (
        <form onSubmit={handleSubmission}>
            <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="BLM name"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.posting}
                name="posting"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.url}
                name="image"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="coordinates"
            />

            <input type="submit" value={buttonLabel}/>
        </form>
    );
};

export default Form;