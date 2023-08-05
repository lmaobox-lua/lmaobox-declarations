/**
 * Represents a string command.
 */
interface StringCmd {
    /**
     * @returns The command string.
     */
    Get: () => string

    /**
     * @param command - The command string to set.
     * @example
     * // Prevent command execution.
     * callbacks.Register('SendStringCmd', command => command:Set('') )
     */
    Set: (command: string) => void
}
