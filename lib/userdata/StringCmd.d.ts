/**
 * Represents a string command.
 */
interface StringCmd {
    /**
     * @returns {string} The command string.
     */
    Get: () => string

    /**
     * @param {string} command - The command string to set.
     * @example
     * // Prevent command execution.
     * callbacks.Register('SendStringCmd', command => command:Set('') )
     */
    Set: (command: string) => void
}
