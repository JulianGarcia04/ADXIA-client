import setCookie from "~/modules/utils/setCookie";

const controller = (data)=>{
    const token = data.token
    setCookie('auth', token, 1000*60*60*8);
}

export default controller;