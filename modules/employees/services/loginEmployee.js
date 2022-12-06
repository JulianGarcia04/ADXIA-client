import {config} from './config';
import Http from '~/modules/package/http';

const loginEmployee = async (data)=> {
    try {
        const request = await Http.post(`${config.EMPLOYEE_SERVICE_URI}/employee/login`, data);
        return request
    } catch (error) {
        console.log(error)
    }
}

export default loginEmployee;