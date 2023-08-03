/**
 * The `GameServerLobby` library provides information about the current match made game.
 */
interface GameServerLobby {
    /**
     * Returns the group ID of the current lobby.
     * @returns {number} The group ID of the current lobby.
     */
    GetGroupID: () => number

    /**
     * Returns a table of LobbyPlayer objects representing the players in the lobby.
     * @returns {LobbyPlayer[]} A table of LobbyPlayer objects representing the players in the lobby.
     * @see {@link https://lmaobox.net/lua/Lua_Classes/LobbyPlayer}
     */
    GetMembers: () => LobbyPlayer[]
}
