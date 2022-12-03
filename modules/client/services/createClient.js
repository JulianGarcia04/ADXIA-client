import { config } from './config/index';

const createClient = async (data, fetcher)=> {

    const client = await fetcher.post(`${config.CLIENT_SERVICE_URI}/client`, {
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