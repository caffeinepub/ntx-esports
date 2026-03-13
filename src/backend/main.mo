import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Application = {
    playerName : Text;
    gameUsername : Text;
    age : Nat;
    message : Text;
  };

  let applications = List.empty<Application>();

  var discordMemberCount = 0;

  type SocialMediaLinks = {
    discord : Text;
    twitter : Text;
    instagram : Text;
    youtube : Text;
    tiktok : Text;
  };

  var socialMediaLinks : SocialMediaLinks = {
    discord = "";
    twitter = "";
    instagram = "";
    youtube = "";
    tiktok = "";
  };

  public shared ({ caller }) func submitApplication(playerName : Text, gameUsername : Text, age : Nat, message : Text) : async () {
    let application : Application = {
      playerName;
      gameUsername;
      age;
      message;
    };
    applications.add(application);
  };

  public query ({ caller }) func getApplications() : async [Application] {
    applications.toArray();
  };

  public shared ({ caller }) func updateDiscordMemberCount(count : Nat) : async () {
    discordMemberCount := count;
  };

  public query ({ caller }) func getDiscordMemberCount() : async Nat {
    discordMemberCount;
  };

  public shared ({ caller }) func updateSocialMediaLinks(discord : Text, twitter : Text, instagram : Text, youtube : Text, tiktok : Text) : async () {
    socialMediaLinks := {
      discord;
      twitter;
      instagram;
      youtube;
      tiktok;
    };
  };

  public query ({ caller }) func getSocialMediaLinks() : async SocialMediaLinks {
    socialMediaLinks;
  };
};
