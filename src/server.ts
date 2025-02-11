import {OpenAPI} from './generated';
import {QuickAiSdkBase} from "./base";

export class QuickAiSdkNode extends QuickAiSdkBase {

    constructor(apiKey: string) {
        super();
        this.apiKey = apiKey;

        OpenAPI.TOKEN = apiKey;  // API ключ
        OpenAPI.HEADERS = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        }
    }
}
