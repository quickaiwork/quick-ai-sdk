import { QuickAiSdkClient } from "./client";
import { QuickAiSdkNode } from "./server";
export { QuickAiSdkClient, QuickAiSdkNode };

if (typeof window !== "undefined") {
    (window as any).QuickAiSdkClient = QuickAiSdkClient;
}
