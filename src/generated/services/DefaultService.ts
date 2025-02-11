/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * AI check user-generated content on your website evaluating the context
     * @param clientId
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static postApiV1CheckContextInput(
        clientId?: string,
        requestBody?: {
            prompt: string;
            context?: string;
            /**
             * optional, advanced moderation instructions for AI moderator
             */
            tuning?: string;
            /**
             * optional, how many CU can be used for this request
             */
            max_units?: number;
            /**
             * optional, which model to use
             */
            model?: string;
        },
    ): CancelablePromise<{
        accepted: boolean;
        reason: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/checkContextInput',
            query: {
                'client_id': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation error`,
                503: `Error in AI communication`,
            },
        });
    }
    /**
     * Automatically fix typos, grammar, and style issues on your website.
     * @param clientId
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static postApiV1CheckGrammar(
        clientId?: string,
        requestBody?: {
            prompt: string;
            max_units?: number;
            model?: string;
        },
    ): CancelablePromise<{
        isCorrect: boolean;
        reason: string;
        suggestedVersion: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/checkGrammar',
            query: {
                'client_id': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation error`,
                503: `Error in AI communication`,
            },
        });
    }
    /**
     * AI check user-provided image for inappropriate content
     * @param clientId
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static postApiV1CheckImage(
        clientId?: string,
        requestBody?: {
            prompt: string;
        },
    ): CancelablePromise<{
        flagged: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/checkImage',
            query: {
                'client_id': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Input error (e.g. invalid image URL)`,
                503: `Error in AI communication`,
            },
        });
    }
}
