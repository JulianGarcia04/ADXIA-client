import {config} from './config';
import Http from '~/modules/package/http';

const loginEmployee = async (dataBody)=> {
    const {data} = await Http.post(`${config.EMPLOYEE_SERVICE_URI}/employee/login`, dataBody);
    console.log(data)
    return data
}

export default loginEmployee;