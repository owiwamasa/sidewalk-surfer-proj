import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addOneSpot } from '../../store/spots';

const CreateSpotForm =({setShowModal}) =>{
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [latitude,setLatitude] = useState('')
    const [longitude,setLongitude] = useState('')
    const [description,setDescription] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        const spot = { name, address, latitude, longitude, description, imageUrl }
        return dispatch(addOneSpot(spot)).then(() => setShowModal(false))
    }

    return (
        <form>
            <div>
                <label>Name</label>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Address</label>
                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Latitude</label>
                <input
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)} />
            </div>
            <div>
                <label>Longitude</label>
                <input
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Image Url</label>
                <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <div>
                <button type="submit">Create Spot</button>
            </div>
        </form>
    )
}

export default CreateSpotForm
