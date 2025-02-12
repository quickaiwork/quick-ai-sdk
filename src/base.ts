import {OpenAPI, DefaultService} from './generated';

export abstract class QuickAiSdkBase {
    protected clientId?: string = undefined;
    protected apiKey?: string = undefined;

    protected constructor() {
        OpenAPI.BASE = "https://api.quickai.work";  // URL API
        OpenAPI.HEADERS = {
            "Content-Type": "application/json",
        }
    }

    async checkContent(text: string, options?: { model?: string; context?: string }) {
        return DefaultService.postApiV1CheckContextInput(this.clientId, {
            prompt: text,
            model: options?.model,
            context: options?.context,
        });
    }

    async checkGrammar(text: string, options?: { model?: string }) {
        return DefaultService.postApiV1CheckGrammar(this.clientId, {
            prompt: text,
            model: options?.model,
        });
    }

    async filterImage(imageUrl: string, options?: { sensitivity?: "low" | "high" }) {
        return DefaultService.postApiV1CheckImage(this.clientId, {
            prompt: imageUrl,
        });
    }
}
