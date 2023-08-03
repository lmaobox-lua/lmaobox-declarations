/** @noSelfInFile **/
/**
 * The `engine` library provides functions to the game's core functionality.
 */
declare namespace engine {
    /**
     * Whether the game console is visible.
     * @returns `true` if the console is visible, false otherwise.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    function Con_IsVisible(): boolean

    /**
     * Whether the game UI is visible.
     * @returns `true` if the UI is visible, false otherwise.
     */
    function IsGameUIVisible(): boolean

    /**
     * Whether the game is taking a screenshot.
     * @returns `true` if the game is taking a screenshot, false otherwise.
     */
    function IsTakingScreenshot(): boolean

    /**
     * Traces a line from `src` to `dst`, and returns a `Trace` object.
     * @param src - The starting point of the trace.
     * @param dst - The ending point of the trace.
     * @param mask - The trace mask.
     * @param [shouldHitEntity] - An optional function that can be used to filter out entities that should not be hit.
     * @returns The trace result.
     */
    function TraceLine(
        src: Vector3,
        dst: Vector3,
        mask: number,
        shouldHitEntity?: (ent: Entity, contentsMask: number) => boolean
    ): Trace

    /**
     * Traces a hull from `src` to `dst`, and returns a `Trace` object.
     * @param src - The starting point of the trace.
     * @param dst - The ending point of the trace.
     * @param mins - The minimum bounds of the hull.
     * @param maxs - The maximum bounds of the hull.
     * @param mask - The trace mask.
     * @param [shouldHitEntity] - An optional function that can be used to filter out entities that should not be hit.
     * @returns The trace result.
     */
    function TraceHull(
        src: Vector3,
        dst: Vector3,
        mins: Vector3,
        maxs: Vector3,
        mask: number,
        shouldHitEntity?: (ent: Entity, contentsMask: number) => boolean
    ): Trace

    /**
     * Checks if the given point is inside a wall, and returns the contents.
     * @param x - The x-coordinate of the point.
     * @param y - The y-coordinate of the point.
     * @param z - The z-coordinate of the point.
     * @returns The contents of the point.
     */
    function GetPointContents(x: number, y: number, z: number): number

    /**
     * Returns the name of the current map.
     * @returns The name of the map.
     */
    function GetMapName(): string

    /**
     * Returns the IP address of the server.
     * @returns The IP address of the server.
     */
    function GetServerIP(): string

    /**
     * Returns the player's view angles.
     * @returns The player's view angles.
     */
    function GetViewAngles(): EulerAngles

    /**
     * Sets the player's view angles.
     * @param angles - The new view angles.
     */
    function SetViewAngles(angles: EulerAngles): void

    /**
     * Plays a sound at the given path, relative to the game's root folder.
     * @param soundPath - The path to the sound file.
     */
    function PlaySound(soundPath: string): void

    /**
     * Returns the game's install directory.
     * @returns The game's install directory.
     */
    function GetGameDir(): string

    /**
     * Sends key values to the server, and returns `true` if successful.
     * @param keyValues - The key values to send.
     * @returns `true` if the key values were sent successfully, false otherwise.
     */
    function SendKeyValues(keyValues: string): boolean

    /**
     * Creates a notification in the TF2 client.
     * @param title - The title of the notification.
     * @param [longText] - The long text of the notification (optional).
     */
    function Notification(title: string, longText?: string): void

    /**
     * Sets the seed for the game's uniform random number generator.
     * @param seed - The new seed value.
     */
    function RandomSeed(seed: number): void

    /**
     * Returns a random number between `min` and `max` (inclusive), using the game's uniform random number generator.
     * @param min - The minimum value of the random number.
     * @param [max] - The maximum value of the random number (default is 1).
     * @returns The random number.
     */
    function RandomFloat(min: number, max?: number): number

    /**
     * Returns a random integer between `min` and `max` (inclusive), using the game's uniform random number generator.
     * @param min - The minimum value of the random integer.
     * @param [max] - The maximum value of the random integer (default is 0x7FFF).
     * @returns The random integer.
     */
    function RandomInt(min: number, max?: number): number

    /**
     * Returns a random number between `min` and `max` using the exponent, using the game's uniform random number generator.
     * @param min - The minimum value of the random number.
     * @param max - The maximum value of the random number.
     * @param [exponent] - The exponent to use (default is 1).
     * @returns The random number.
     */
    function RandomFloatExp(min: number, max: number, exponent?: number): number
}
