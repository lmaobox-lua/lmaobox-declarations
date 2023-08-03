/** @noSelfInFile **/
interface CallbackAction {
    Draw: (arg0: undefined) => void
    DrawModel: (arg0: DrawModelContext) => void
    CreateMove: (arg0: UserCmd) => void
    FireGameEvent: (arg0: GameEvent) => void
    DispatchUserMessage: (arg0: UserMessage) => void
    SendStringCmd: (arg0: StringCmd) => void
    PostPropUpdate: (arg0: undefined) => void
    ServerCmdKeyValues: (arg0: StringCmd) => void
    OnFakeUncrate: (arg0: Item, arg1: []) => void
    OnLobbyUpdated: (arg0: GameServerLobby) => void
    SetRichPresence: (arg0: string, arg1: string) => void
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
    function Unregister(id: string, unique: string): void
}
