import { config } from "./config";
import Http from "~/modules/package/http";

const getEmployees = async (token, limit, skip) => {
  const request = await Http.get(
    `${config.EMPLOYEE_SERVICE_URI}/employees?skip=${skip}&&limit=${limit}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  return request;
};

export default getEmployees;
