/** @noSelfInFile **/
/**
 * The `clientstate` library provides functions to get information about the internal client state.
 */
declare namespace clientstate {
    /**
     * Requests a full update from the server.
     * This operation is resource-intensive so use it sparingly.
     */
    function ForceFullUpdate(): void

    /**
     * @returns Current client sign-on state.
     */
    function GetClientSignonState(): number

    /**
     * @returns The last valid received snapshot (server) tick
     */
    function GetDeltaTick(): number

    /**
     * @returns The last outgoing command number.
     */
    function GetLastOutgoingCommand(): number

    /**
     * @returns The number of choked commands.
     */
    function GetChokedCommands(): number

    /**
     * @returns The last command sequence number acknowledged by server
     */
    function GetLastCommandAck(): number

    /**
     * @returns The time the client connected to the server.
     */
    function GetConnectTime(): number

    /**
     * @returns The time since the last tick was received.
     */
    function GetTimeSinceLastReceived(): number

    /**
     * @returns The incoming latency.
     */
    function GetLatencyIn(): number

    /**
     * @returns The outgoing latency.
     */
    function GetLatencyOut(): number
}
