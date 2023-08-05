/**
 * The `PartyMemberActivity` class is used to provide information about a party member.
 */
interface PartyMemberActivity {
    /**
     * @returns The lobby ID of the party member, or undefined if the member is not in a matchmade game.
     */
    GetLobbyID: () => string | undefined

    /**
     * @returns Whether the party member is currently online.
     */
    IsOnline: () => boolean

    /**
     * @returns Whether the party member is currently blocked from joining a matchmade game.
     */
    IsMultiqueueBlocked: () => boolean

    /**
     * @returns The client version of the party member.
     */
    GetClientVersion: () => string
}
