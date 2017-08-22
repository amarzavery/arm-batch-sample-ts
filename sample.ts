
import * as msRest from "ms-rest-ts";
import { BatchManagementClient, BatchManagementModels } from "azure-arm-batch-ts";

const token = "<token>";
const credentials = new msRest.TokenCredentials(token);
const subscriptionId = "<subscriptionId>";
const client = new BatchManagementClient(credentials, subscriptionId);


async function checkName(location: string, name: string): Promise<BatchManagementModels.CheckNameAvailabilityResult> {
  let res: BatchManagementModels.CheckNameAvailabilityResult;
  try {
    res = await client.location.checkNameAvailability(location, name);
    console.dir(res, { depth: null });
    document.write(JSON.stringify(res));
    return Promise.resolve(res);
  } catch (err) {
    console.dir(err, { depth: null });
    document.write(JSON.stringify(err));
    return Promise.reject(err);
  }
}

checkName("westus", "test");