import React, {useState} from 'react';
import useCreateUrl from '~/hooks/useCreateUrl';
import View from './View';

function ImageField({alt, src}) {
    const [fileInput, setFileInput] = useState('');
    const {image} = useCreateUrl(fileInput);

    const getFile = (e)=>{
        if(e.target.files.length != 0){
            setFileInput(e.target.files[0]);
        }
    }
    
    return (
        <View onChange={getFile} imageLocal={image} alt={alt} src={src}/>
    )
}

export default ImageField