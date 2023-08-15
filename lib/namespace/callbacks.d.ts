/** @noSelfInFile **/

type RichPresenceKey =
    | 'currentmap' /* Represents the current map being played. */
    | 'connect' /*  A UTF-8 string that will show up in the 'view game info' dialog in the Steam friends list. */
    | 'steam_player_group' /* When set, indicates to the Steam client that the player is a member of a particular group. Players in the same group may be organized together in various places in the Steam UI. This string could identify a party, a server, or whatever grouping is relevant for your game. The string itself is not displayed to users. */
    | 'steam_player_group_size' /* When set, indicates the total number of players in the steam_player_group. The Steam client may use this number to display additional information about a group when all of the members are not part of a user's friends list. (For example, "Bob, Pete, and 4 more".) */
    | 'state'
    | 'matchgrouploc'
    | 'steam_display' /* Names a rich presence localization token that will be displayed in the viewing user's selected language in the Steam client UI. See Rich Presence Localization for more info, including a link to a page for testing this rich presence data. If steam_display is not set to a valid localization tag, then rich presence will not be displayed in the Steam client. */
    | 'status' /* A UTF-8 string that will show up in the 'view game info' dialog in the Steam friends list */

/** @noSelf **/
interface CallbackAction {
    Draw: (arg0: undefined) => void
    DrawModel: (arg0: DrawModelContext) => void
    DrawStaticProps: (arg0: StaticPropRenderInfo) => void
    CreateMove: (arg0: UserCmd) => void
    FireGameEvent: (arg0: GameEvent) => void
    DispatchUserMessage: (arg0: UserMessage) => void
    SendStringCmd: (arg0: StringCmd) => void
    PostPropUpdate: (arg0: undefined) => void
    ServerCmdKeyValues: (arg0: StringCmd) => void
    OnFakeUncrate: (arg0: Item, arg1: []) => void
    OnLobbyUpdated: (arg0: GameServerLobby) => void
    SetRichPresence: (arg0: RichPresenceKey, arg1: string) => any
    Unload: (arg0: undefined) => void
}

/**
 * The `callbacks` library provides functions for registering and unregistering callback functions for cheat events.
 */
declare namespace callbacks {
    /**
     * Registers a callback function to be called when the event with the given id occurs.
     * @param id - The ID of the event to register the callback for.
     * @param callback - The callback function to register.
     */
    function Register<T extends keyof CallbackAction>(
        id: T,
        callback: CallbackAction[T]
    ): void

    /**
     * Registers a callback function to be called when the event with the given id occurs.
     * If the unique identifier is already registered, it will not be registered again.
     * @param id - The ID of the event to register the callback for.
     * @param unique - A unique identifier for the callback.
     * @param callback - The callback function to register.
     */
    function Register<T extends keyof CallbackAction>(
        id: T,
        unique: string,
        callback: CallbackAction[T]
    ): void

    /**
     * Unregisters a callback function from the event with the given id.
     * @param id - The ID of the event to unregister the callback from.
     * @param unique - The unique identifier of the callback to unregister.
     * @example
     * // Unregisters all unnamed callbacks in the current script from the "Draw" event.
     * callbacks.Unregister("Draw", "")
     */
    function Unregister<T extends keyof CallbackAction>(
        id: T,
        unique: string
    ): void
}
