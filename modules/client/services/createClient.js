import { config } from './config/index';
import Http from '~/modules/package/http';

const createClient = async (data)=> {

    const client = await Http.post(`${config.CLIENT_SERVICE_URI}/client`, {
      name: data.name,
      surname: data.lastname,
      nroDocument: data.nroDocument,
      phoneNumber: data.phoneNumber,
      address: data.address,
      imageURL: data.imageURL,
      business: data.business
    });
  
    return client;
}

export default createClient;