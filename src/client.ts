import {QuickAiSdkBase} from "./base";

export class QuickAiSdkClient extends QuickAiSdkBase {

    constructor(clientId: string) {
        super();
        this.clientId = clientId;
    }
}
