import { useQuery } from "@tanstack/react-query";
import type { SocialMediaLinks } from "../backend.d";
import { useActor } from "./useActor";

const DEFAULT_LINKS: SocialMediaLinks = {
  discord: "https://discord.gg/dVMxcUsz",
  twitter: "#",
  instagram: "#",
  youtube: "#",
  tiktok: "#",
};

export function useDiscordMemberCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["discordMemberCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      try {
        return await actor.getDiscordMemberCount();
      } catch {
        return BigInt(0);
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSocialMediaLinks() {
  const { actor, isFetching } = useActor();
  return useQuery<SocialMediaLinks>({
    queryKey: ["socialMediaLinks"],
    queryFn: async () => {
      if (!actor) return DEFAULT_LINKS;
      try {
        const links = await actor.getSocialMediaLinks();
        // If discord link is empty in backend, use the hardcoded one
        return {
          ...links,
          discord:
            links.discord && links.discord !== ""
              ? links.discord
              : DEFAULT_LINKS.discord,
        };
      } catch {
        return DEFAULT_LINKS;
      }
    },
    enabled: !!actor && !isFetching,
  });
}
