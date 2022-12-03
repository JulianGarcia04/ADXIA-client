import { config } from './config/index';

const deleteClient = async (clientId, fetcher)=> {


    fetcher.delete(`${config.CLIENT_SERVICE_URI}`)
  
}

export default deleteClient;