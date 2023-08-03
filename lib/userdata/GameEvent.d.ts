/**
 * Represents a game event that was sent from the server.
 * For a list of game events for Source games and TF2 see the GameEvent List.
 * @see {@link https://wiki.alliedmods.net/Team_Fortress_2_Events}
 */
interface GameEvent {
    /**
     * @returns {string} The name of the event.
     */
    GetName: () => string

    /**
     * @param {string} fieldName - The name of the field to get the value of.
     * @returns {string} The string value of the given field.
     */
    GetString: (fieldName: string) => string

    /**
     * @param {string} fieldName - The name of the field to get the value of.
     * @returns {number} The int value of the given field.
     */
    GetInt: (fieldName: string) => number

    /**
     * @param {string} fieldName - The name of the field to get the value of.
     * @returns {number} The float value of the given field.
     */
    GetFloat: (fieldName: string) => number

    /**
     * @param {string} fieldName - The name of the field to set the value of.
     * @param {string} value - The value to set the field to.
     */
    SetString: (fieldName: string, value: string) => void

    /**
     * @param {string} fieldName - The name of the field to set the value of.
     * @param {number} value - The value to set the field to.
     */
    SetInt: (fieldName: string, value: number) => void

    /**
     * @param {string} fieldName - The name of the field to set the value of.
     * @param {number} value - The value to set the field to.
     */
    SetFloat: (fieldName: string, value: number) => void

    /**
     * @param {string} fieldName - The name of the field to set the value of.
     * @param {boolean} value - The value to set the field to.
     */
    SetBool: (fieldName: string, value: boolean) => void
}
