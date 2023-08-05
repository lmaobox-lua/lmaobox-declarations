/**
 * Represents a map that is playable in a matchmaking match.
 */
interface MatchMapDefinition {
    /**
     * @returns The name of the map.
     */
    GetName: () => string

    /**
     * @returns The ID of the map.
     */
    GetID: () => number

    /**
     * @returns The map name localization key.
     */
    GetNameLocKey: () => string
}
