/**
 * This `globals` library provide functions to global source engine variables.
 */
declare namespace globals {
    /**
     * @returns The server tick interval.
     */
    function TickInterval(): number

    /**
     * @returns The client tick count.
     */
    function TickCount(): number

    /**
     * @returns The time since start of the game.
     */
    function RealTime(): number

    /**
     * @returns The current time.
     */
    function CurTime(): number

    /**
     * @returns The frame count.
     */
    function FrameCount(): number

    /**
     * @returns The delta time between frames.
     */
    function FrameTime(): number

    /**
     * @returns The absolute delta time between frames.
     */
    function AbsoluteFrameTime(): number

    /**
     * @returns The max player count of the current server.
     */
    function MaxClients(): number
}
