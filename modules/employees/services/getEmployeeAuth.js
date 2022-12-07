import {config} from './config';
import Http from '~/modules/package/http';

const getEmployeeAuth = async (token)=>{
    try {
        const request = await Http.get(`${config.EMPLOYEE_SERVICE_URI}/employee/current`, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        return request
    } catch (error) {
        throw error
    }
}

export default getEmployeeAuth;