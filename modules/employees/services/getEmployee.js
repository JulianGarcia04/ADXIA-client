import {config} from './config';
import Http from '~/modules/package/http';

const getEmployee = async (idEmployee, token)=> {
    const request = await Http.get(`${config.EMPLOYEE_SERVICE_URI}/employee?employeeId=${idEmployee}`, {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
};

export default getEmployee;