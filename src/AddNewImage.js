import React from 'react'
import Select from 'react-select';
import { useState } from 'react';

//ảnh chân dung, ảnh phong cảnh, ảnh trừu tượng,
const AddNewImage = (props) => {

    const options = [
        { value: 'chan_dung', label: 'chan_dung' },
        { value: 'phogn_canh', label: 'phong_canh' },
        { value: 'truu_tuong', label: 'truu_tuong' },

    ];

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState("chan_dung");
    const [imgae, setImgae] = useState(null);

    const handleChangeFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImgae(event.target.files[0])
        }
    }

    const handleSubmitImage = () => {
        alert('me');
    }
    return (
        <div className='image-container'>
            <div className='title'>
                Manage Image
            </div>
            <hr />
            <div className='add-new'>

                <fieldset className='border rounded-3 p-3'>
                    <legend className='float-none w-auto px-3'>Add new Image </legend>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="name image"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <label>Name</label>
                    </div>
                    <div class="form-floating">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="description..."
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <label >Description</label>
                    </div>
                    <div className='my-3'>
                        <Select
                            defaultValue={type}
                            onChange={setType}
                            options={options}
                            placeholder={"Image type..."}
                        />
                    </div>
                    <div className='more-actions form-group'>
                        <label className='mb-1'>Upload Image</label>
                        <input
                            type="file"
                            className='form-control'
                            onChange={(event) => handleChangeFile(event)}
                        />
                    </div>
                    <div className='mt-3'
                        onClick={() => handleSubmitImage()}
                    >
                        <button className='btn btn-warning'>Save</button>
                    </div>
                </fieldset>
            </div>
            <div className='list-detail'>
                table
            </div>
        </div>
    )
}


export default AddNewImage;