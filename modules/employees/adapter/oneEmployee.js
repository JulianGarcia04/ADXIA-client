const adapterOneUser = (data)=>{
    return {
        id: data.id,
        name: data.name,
        lastname: data.surname,
        email: data.email,
        birthdate: data.birthDate,
        nroDoc: data.nroDocument,
        imageUrl: data.imageURL,
        type: data.type,
        tel: data.phone
    }
}

export default adapterOneUser;