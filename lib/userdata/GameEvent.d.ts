/**
 * Represents a game event that was sent from the server.
 * For a list of game events for Source games and TF2 see the GameEvent List.
 * @see {@link https://wiki.alliedmods.net/Team_Fortress_2_Events}
 */
interface GameEvent {
    /**
     * @returns The name of the event.
     */
    GetName: () => string

    /**
     * @param fieldName - The name of the field to get the value of.
     * @returns The string value of the given field.
     */
    GetString: (fieldName: string) => string

    /**
     * @param fieldName - The name of the field to get the value of.
     * @returns The int value of the given field.
     */
    GetInt: (fieldName: string) => number

    /**
     * @param fieldName - The name of the field to get the value of.
     * @returns The float value of the given field.
     */
    GetFloat: (fieldName: string) => number

    /**
     * @param fieldName - The name of the field to set the value of.
     * @param value - The value to set the field to.
     */
    SetString: (fieldName: string, value: string) => void

    /**
     * @param fieldName - The name of the field to set the value of.
     * @param value - The value to set the field to.
     */
    SetInt: (fieldName: string, value: number) => void

    /**
     * @param fieldName - The name of the field to set the value of.
     * @param value - The value to set the field to.
     */
    SetFloat: (fieldName: string, value: number) => void

    /**
     * @param fieldName - The name of the field to set the value of.
     * @param value - The value to set the field to.
     */
    SetBool: (fieldName: string, value: boolean) => void
}
