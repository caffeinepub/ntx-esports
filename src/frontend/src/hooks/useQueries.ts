import { useQuery } from "@tanstack/react-query";
import type { SocialMediaLinks } from "../backend.d";
import { useActor } from "./useActor";

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
      if (!actor) {
        return {
          discord: "#",
          twitter: "#",
          instagram: "#",
          youtube: "#",
          tiktok: "#",
        };
      }
      try {
        return await actor.getSocialMediaLinks();
      } catch {
        return {
          discord: "#",
          twitter: "#",
          instagram: "#",
          youtube: "#",
          tiktok: "#",
        };
      }
    },
    enabled: !!actor && !isFetching,
  });
}
