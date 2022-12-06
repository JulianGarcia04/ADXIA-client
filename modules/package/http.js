import axios from "axios";

class Http {
    static async get(url, options){
        try {
            const request = await axios.get(url, options&&{
                headers: options.headers
            })
            return request;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async post(url, data, options){
        try {
            const request = await axios.post(url, data, options&&{
                headers: options.headers
            })
            return request;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async put(url, data, options){
        try {
            const request = await axios.put(url, data, options&&{
                headers: options.headers
            })
            return request;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async delete(url, options){
        try {
            const request = await axios.delete(url, options&&{
                headers : options.headers
            })
            return request;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Http;