import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SocialMediaLinks {
    tiktok: string;
    twitter: string;
    instagram: string;
    discord: string;
    youtube: string;
}
export interface Application {
    age: bigint;
    gameUsername: string;
    message: string;
    playerName: string;
}
export interface backendInterface {
    getApplications(): Promise<Array<Application>>;
    getDiscordMemberCount(): Promise<bigint>;
    getSocialMediaLinks(): Promise<SocialMediaLinks>;
    submitApplication(playerName: string, gameUsername: string, age: bigint, message: string): Promise<void>;
    updateDiscordMemberCount(count: bigint): Promise<void>;
    updateSocialMediaLinks(discord: string, twitter: string, instagram: string, youtube: string, tiktok: string): Promise<void>;
}
