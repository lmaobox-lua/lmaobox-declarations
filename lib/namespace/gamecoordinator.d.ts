/** @noSelfInFile **/
/**
 * The `gamecoordinator` library provides information about the state of the matchmaking system and current match made game.
 */
declare namespace gamecoordinator {
    /**
     * @returns Is player connected to the game coordinator.
     */
    function ConnectedToGC(): boolean

    /**
     * @returns Is player in the end of match phase.
     */
    function InEndOfMatch(): boolean

    /**
     * @returns Is player is assigned to a live match.
     */
    function HasLiveMatch(): boolean

    /**
     * @returns Is player connected to the assigned match server.
     */
    function IsConnectedToMatchServer(): boolean

    /**
     * Abandons the current match and forcefully disconnects the player from the match server.
     */
    function AbandonMatch(): void

    /**
     * @returns The status of the match relative to the player connection.
     */
    function GetMatchAbandonStatus(): number

    /**
     * Returns the ping data for all available data centers in a table.
     * @returns A table of data centers and their corresponding ping values.
     * @example
     * printLuaTable(gamecoordinator.GetDataCenterPingData())
     * ord: 239
     * waw: 239
     * fra: 193
     * vie: 215
     * lax: 192
     * eat: 205
     * tyo: 172
     * hkg: 75
     * ams: 305
     */
    function GetDataCenterPingData(): LuaMap<string, number>

    /**
     * Sets the ping data for a specific data center.
     * @param datacenter - The key of the data center to set the ping for.
     * @param ping - The ping to set for the data center. Lower ping gives a better chance of landing on a server in that data center.
     * @returns Wether the ping data was successfully set.
     */
    function SetDataCenterPingData(datacenter: string, ping: number): boolean

    /**
     * @returns The number of match invites the player has.
     */
    function GetNumMatchInvites(): number

    /**
     * Accepts all match invites the player has.
     * Usually it's just one, and they are automatically accepted after some time anyway, so you can selectively accept them.
     * Accepting an invite does not immediately join you into the match.
     * @returns Whether one or more match invites were accepted.
     */
    function AcceptMatchInvites(): boolean

    /**
     * Joins the match the player is currently assigned to from the previously accepted match invite.
     * This is usually called after accepting a match invite if the player wants to join the match.
     * If not, call AbandonMatch() to leave the match.
     * @returns undocumented
     */
    function JoinMatchmakingMatch(): boolean

    /**
     * Enumerates the maps in the queue and calls the callback function for each map.
     * The callback function receives the MatchMapDefinition and the health of the map represented as a number from 0 to 1.
     * You must receive the GameCoordinator's map health update at least once to use this function (i.e. by queueing up).
     * @param callback - The callback function to call for each map.
     */
    function EnumerateQueueMapsHealth(
        callback: (arg0: MatchMapDefinition, health: number) => void
    ): void

    /**
     * @returns The GameServerLobby object for the current match or undefined if the player is not in a match.
     */
    function GetGameServerLobby(): GameServerLobby | undefined
}
