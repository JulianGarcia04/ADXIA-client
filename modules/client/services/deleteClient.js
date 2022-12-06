import { config } from './config/index';
import Http from '~/modules/package/http';

const deleteClient = async (clientId)=> {


    Http.delete(`${config.CLIENT_SERVICE_URI}`)
  
}

export default deleteClient;