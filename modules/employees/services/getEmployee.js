import {config} from './config';
import Http from '~/modules/package/http';

const getEmployee = (idEmployee)=> {
    const request = await Http.get(`${config.EMPLOYEE_SERVICE_URI}/employee?employeeId=${idEmployee}`)
};

export default getEmployee;