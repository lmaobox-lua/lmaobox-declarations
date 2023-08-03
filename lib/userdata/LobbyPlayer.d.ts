/**
 * The `LobbyPlayer` class is used to provide information about a player in a Game Server lobby.
 */

interface LobbyPlayer {
    /**
     * @returns {string} The SteamID of the player.
     */
    GetSteamID: () => string

    /**
     * @returns {number} The GC assigned team of the player.
     */
    GetTeam: () => number

    /**
     * @returns {number} The GC assigned player type of this player.
     */
    GetPlayerType: () => number

    /**
     * @returns {string} The steam name of the player.
     */
    GetName: () => string

    /**
     * @returns {number} The last time the player connected to the server as a unix timestamp.
     */
    GetLastConnectTime: () => number

    /**
     * @returns {number} The normalized rating of the player - a measure of the player's skill (?)
     */
    GetNormalizedRating: () => number

    /**
     * @returns {number} The uncertainty of the player's normalized rating - a measure of how confident the GC is in the player's rating.
     */
    GetNormalizedUncertainty: () => number

    /**
     * @returns {number} The casual level of the player.
     */
    GetRank: () => number

    /**
     * @returns {boolean} Wether player is chat suspendend.
     */
    IsChatSuspended: () => number
}
