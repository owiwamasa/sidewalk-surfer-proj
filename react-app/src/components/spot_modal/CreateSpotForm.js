import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const CreateSpotForm =() =>{
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [latitude,setLatitude] = useState('')
    const [longitude,setLongitude] = useState('')
    const [description,setDescription] = useState('')
    const [imageUrl,setImageUrl] = useState('')
}

export default CreateSpotForm