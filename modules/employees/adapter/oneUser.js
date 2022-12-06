const adapterOneUser = (data)=>{
    return {
        name: data.name,
        lastname: data.surname,
        email: data.email,
        birthdate: data.birthDate,
        nroDoc: data.nroDocument,
        imageUrl: data.imageUrl,
        type: data.type,
        tel: data.phone
    }
}

export default adapterOneUser;