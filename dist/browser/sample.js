var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as msRest from "ms-rest-ts";
import { BatchManagementClient } from "azure-arm-batch-ts";
const token = "<token>";
const credentials = new msRest.TokenCredentials(token);
const subscriptionId = "<subscriptionId>";
const client = new BatchManagementClient(credentials, subscriptionId);
function checkName(location, name) {
    return __awaiter(this, void 0, void 0, function* () {
        let res;
        try {
            res = yield client.location.checkNameAvailability(location, name);
            console.dir(res, { depth: null });
            document.write(JSON.stringify(res));
            return Promise.resolve(res);
        }
        catch (err) {
            console.dir(err, { depth: null });
            document.write(JSON.stringify(err));
            return Promise.reject(err);
        }
    });
}
checkName("westus", "test");
//# sourceMappingURL=sample.js.map