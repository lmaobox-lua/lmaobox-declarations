/** @noSelfInFile **/
/**
 * The `client` library provides functions to get information about the client.
 */

declare namespace client {
    /**
     * @returns The number of extra inventory slots the user has.
     */
    function GetExtraInventorySlots(): number

    /**
     * @returns Whether the user is a free trial account.
     */
    function IsFreeTrialAccount(): boolean

    /**
     * @returns Whether the user has competitive access.
     */
    function HasCompetitiveAccess(): boolean

    /**
     * @returns Whether the user is in the coaches list.
     */
    function IsInCoachesList(): boolean

    /**
     * Translate world position into screen position (x,y)
     * @param worldPos - The world position to translate.
     * @returns An array containing the x and y screen position.
     */
    function WorldToScreen(worldPos: Vector3): [number, number]

    /**
     * Runs a command in the game console.
     * To prevent string injection, it is recommended to sanitize the input before concatenating it.
     * @param command - The command to run.
     * @param unrestrict - Whether to unrestrict the command.
     */
    function Command(command: string, unrestrict: boolean): void

    /**
     * Say text on chat.
     * @param msg - The message to say.
     */
    function ChatSay(msg: string): void

    /**
     * Say text on team chat.
     * @param msg - The message to say.
     */
    function ChatTeamSay(msg: string): void

    /**
     * DOES NOTHING. All events are allowed by default. This function is deprecated, and it's only there to not cause errors in existing scripts.
     * @deprecated
     * @param eventName - The name of the event.
     */
    function AllowListener(eventName: string): void

    /**
     * @param index - The index of the player.
     * @returns The name of the player.
     */
    function GetPlayerNameByIndex(index: number): string

    /**
     * @param userID - The user id of the player.
     * @returns The name of the player.
     */
    function GetPlayerNameByUserID(userID: number): string

    /**
     * @param index - The index of the player.
     * @returns A table containing the player's name, user ID, Steam ID, and bot/HLTV status.
     */
    function GetPlayerInfo(index: number): {
        Name: string
        UserID: number
        SteamID: string
        IsBot: boolean
        IsHLTV: boolean
    }

    /**
     * @returns The local player index.
     * @example
     * // Filter out local player from all players
     * const players = entities.FindByClass("CTFPlayer")
     * players[client.GetLocalPlayerIndex()] = undefined
     */
    function GetLocalPlayerIndex(): number

    /**
     * Get game convar value. Returns integer, number and string if found. Returns nil if not found.
     * @param name - The name of the convar.
     * @returns The value of the convar or undefined if not found.
     */
    function GetConVar(name: string): number | string | undefined

    /**
     * Set game convar value. Value can be integer, number, string.
     * @param name - The name of the convar.
     * @param value - The value to set the convar to.
     */
    function SetConVar(name: string, value: number | string): void

    /**
     * Remove convar protection.
     * This is needed for convars that are not allowed to be changed by the server.
     * @param name - The name of the convar.
     */
    function RemoveConVarProtection(name: string): void

    /**
     * Print text on chat, this text can be colored. Color codes are:
     * @example
     * '\x01' White color
     * '\x02' Old color
     * '\x03' Player name color
     * '\x04' Location color
     * '\x05' Achievement color
     * '\x06' Black color
     * '\x07' Custom color, read from next 6 characters as HEX
     * '\x08' Custom color with alpha, read from next 8 characters as HEX
     * @param msg - The message to print.
     */
    function ChatPrintf(msg: string): void

    /**
     * @param key - The key of the localized string.
     * @returns The localized string or undefined if not found.
     */
    function Localize(key: string): string | undefined
}
