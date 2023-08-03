/** @noSelfInFile **/
/**
 * The `steam` library provides functions to basic Steam API functionality and data.
 */
declare namespace steam {
    /**
     * @returns The SteamID of the current user.
     */
    function GetSteamID(): string

    /**
     * @param steamid - The SteamID of the player.
     * @returns The steam profile name of the player.
     */
    function GetPlayerName(steamid: string): string

    /**
     * @param steamid - The SteamID of the player.
     * @returns Wether the player is a friend of the user.
     */
    function IsFriend(steamid: string): boolean

    /**
     * @returns An array of all friends of the user.
     */
    function GetFriends(): string[]

    /**
     * @param steamid - The SteamID of the player.
     * @returns The 64bit SteamID of the player.
     */
    function ToSteamID64(steamid: string): number
}
