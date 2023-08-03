/** @noSelfInFile **/
/**
 * The `party` library provides functions for managing the player's matchmaking party.
 * All functions return undefined if the player is not in a party or the party client is not initialized.
 */
declare namespace party {
    /**
     * Returns the player's party leader's SteamID as string.
     * @returns The SteamID of the party leader or undefined if not in a party.
     */
    function GetLeader(): string | undefined

    /**
     * Returns a table containing the player's party members' SteamIDs as strings.
     * @returns An array of SteamIDs of party members or undefined if not in a party.
     */
    function GetMembers(): string[] | undefined

    /**
     * Returns a table containing the player's pending party members' SteamIDs as strings.
     * These members are invited to party, but have not joined yet.
     * @returns An array of SteamIDs of pending party members or undefined if not in a party.
     */
    function GetPendingMembers(): string[] | undefined

    /**
     * Returns the player's party's group ID.
     * @returns The group ID of the player's party or undefined if not in a party.
     */
    function GetGroupID(): number | undefined

    /**
     * Returns a table where values are the player's queued match groups as MatchGroup objects.
     * @returns An object where keys are match group names and values are MatchGroup objects or undefined if not in a party.
     */
    function GetQueuedMatchGroups(): MatchGroup

    /**
     * Returns a table where values are all possible match groups as MatchGroup objects.
     * @returns An object where keys are match group names and values are MatchGroup objects.
     */
    function GetAllMatchGroups(): MatchGroup

    /**
     * Leaves the current party.
     */
    function Leave(): void

    /**
     * Returns `true` if the player can queue for the given match group.
     * If the player can not queue for the match groups, returns a table of reasons why the player can not queue.
     * @param matchGroup - The match group to check.
     * @returns `true` if the player can queue, or a table of reasons why the player cannot queue.
     */
    function CanQueueForMatchGroup(
        matchGroup: MatchGroup
    ): boolean | LuaMap<string, string>

    /**
     * @param matchGroup - The match group to queue up for.
     */
    function QueueUp(matchGroup: MatchGroup): void

    /**
     * @param matchGroup - The match group to cancel the queue for.
     */
    function CancelQueue(matchGroup: MatchGroup): void

    /**
     * @returns Whether the player is queueing up for an ongoing match in current party
     */
    function IsInStandbyQueue(): boolean | undefined

    /**
     * @returns Wether the player can queue up for an ongoing match in current party
     */
    function CanQueueForStandby(): boolean | undefined

    /**
     * Requests to queue up for the ongoing match in your party.
     */
    function QueueUpStandby(): void

    /**
     * Cancels the request to queue up for the ongoing match in your party.
     */
    function CancelQueueStandby(): void

    /**
     * @param index - The index of the party member to get the activity for.
     * @returns The PartyMemberActivity of the party member
     */
    function GetMemberActivity(index: number): PartyMemberActivity | undefined

    /**
     * Works only if you are the party leader.
     * @param steamid - The SteamID of the player to promote to party leader.
     */
    function PromoteMemberToLeader(steamid: string): void

    /**
     * Works only if you are the party leader.
     * @param steamid - The SteamID of the player to kick from the party.
     */
    function KickMember(steamid: string): void

    /**
     * @param map - The map to check.
     * @returns Wether the map is selected for casual play
     */
    function IsCasualMapSelected(map: MatchMapDefinition): boolean

    /**
     * @param map - The map to set as selected.
     * @param selected - Whether to select or deselect the map.
     */
    function SetCasualMapSelected(
        map: MatchMapDefinition,
        selected: boolean
    ): void
}
