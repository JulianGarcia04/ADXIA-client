import {getEmployeeAuth} from '~/modules/employees/services';
import getCookie from '~/modules/utils/getCookie';
import { adapterUser } from '~/modules/employees/adapter';

export const getEmployeAuthControllerHome = async (token)=>{
    const request = await getEmployeeAuth(token);
    return adapterUser(request.data.employee);
}