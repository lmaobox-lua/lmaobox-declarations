/** @noSelfInFile **/
/**
 * The `playerlist` library provides functions to retrieve values from, and customize the playerlist.
 */

declare namespace playerlist {
    /**
     * Returns the priority of the player.
     * @param player - The player entity.
     * @returns The priority of the player.
     */
    function GetPriority(player: Entity): number

    /**
     * Returns the priority of the player by user ID.
     * @param userID - The user ID of the player.
     * @returns The priority of the player.
     */
    function GetPriority(userID: number): number

    /**
     * Returns the priority of the player by Steam ID.
     * @param steamID - The Steam ID of the player.
     * @returns The priority of the player.
     */
    function GetPriority(steamID: string): number

    /**
     * Sets the priority of the player.
     * @param player - The player entity.
     * @param priority - The priority to set.
     * @returns undocumented
     */
    function SetPriority(player: Entity, priority: number): boolean

    /**
     * Sets the priority of the player by user ID.
     * @param userID - The user ID of the player.
     * @param priority - The priority to set.
     * @returns undocumented
     */
    function SetPriority(userID: number, priority: number): boolean

    /**
     * Sets the priority of the player by Steam ID.
     * @param steamID - The Steam ID of the player.
     * @param priority - The priority to set.
     * @returns undocumented
     */
    function SetPriority(steamID: string, priority: number): boolean

    /**
     * Returns the color of the player.
     * @param player - The player entity.
     * @returns The color of the player.
     */
    function GetColor(player: Entity): number

    /**
     * Returns the color of the player by user ID.
     * @param userID - The user ID of the player.
     * @returns The color of the player.
     */
    function GetColor(userID: number): number

    /**
     * Returns the color of the player by Steam ID.
     * @param steamID - The Steam ID of the player.
     * @returns The color of the player.
     */
    function GetColor(steamID: string): number

    /**
     * Sets the color of the player.
     * @param player - The player entity.
     * @param color - The color to set.
     * @returns undocumented
     */
    function SetColor(player: Entity, color: number): boolean

    /**
     * Sets the color of the player by user ID.
     * @param userID - The user ID of the player.
     * @param color - The color to set.
     * @returns undocumented
     */
    function SetColor(userID: number, color: number): boolean

    /**
     * Sets the color of the player by Steam ID.
     * @param steamID - The Steam ID of the player.
     * @param color - The color to set.
     * @returns undocumented
     */
    function SetColor(steamID: string, color: number): boolean
}
