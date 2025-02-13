import { QuickAiSdkClient } from "./client";
import { QuickAiSdkNode } from "./server";
import { QuickAiSdkBase } from "./base";
export { QuickAiSdkClient, QuickAiSdkNode, QuickAiSdkBase };

if (typeof window !== "undefined") {
    (window as any).QuickAiSdkClient = QuickAiSdkClient;
}
