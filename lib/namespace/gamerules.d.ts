/** @noSelfInFile **/
/**
 * The `gamerules` library provides functions for detecting the game rules of a TF2 match.
 */
declare namespace gamerules {
    /**
     * @returns Wether the match is a casual match.
     */
    function IsMatchTypeCasual(): boolean

    /**
     * @returns Wether the match is a competitive match.
     */
    function IsMatchTypeCompetitive(): boolean

    /**
     * @returns Wether the matchmaking match has ended.
     */
    function IsManagedMatchEnded(): boolean

    /**
     * @returns The time left in the match.
     */
    function GetTimeLeftInMatch(): number

    /**
     * When truce is active, players cannot attack each other.
     * @returns Wether truce is active.
     */
    function IsTruceActive(): boolean

    /**
     * @returns Wether the current match is a MvM game.
     */
    function IsMvM(): boolean

    /**
     * @returns The current match group.
     * undocumented
     */
    function GetCurrentMatchGroup(): number

    /**
     * @returns Wether current gamemode allows players to use the grappling hook.
     */
    function IsUsingGrapplingHook(): boolean

    /**
     * @returns Wether current gamemode allows players to use spells.
     */
    function IsUsingSpells(): boolean

    /**
     * @returns The current next map voting state.
     */
    function GetCurrentNextMapVotingState(): string

    /**
     * Gets the voted map option of a specific player.
     * @param playerIndex - The index of the player to get the vote state for.
     * @returns - The voted map option of the player. (1, 3)
     */
    function GetPlayerVoteState(playerIndex: number): number

    /**
     * @returns The representing current state of the round.
     */
    function GetRoundState(): number

    /**
     * @param playerIndex - The player index
     * @returns Wether the player has ready-up
     */
    function IsPlayerReady(playerIndex: number): boolean
}
