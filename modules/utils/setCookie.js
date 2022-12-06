const setCookie = (key, value, expires)=>{
    document.cookie = `${key}=${value}; expires=${new Date(expires?Date.now()+expires:Date.now())}`;
}

export default setCookie;