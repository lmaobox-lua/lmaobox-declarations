/**
 * Represents a map that is playable in a matchmaking match.
 */
interface MatchMapDefinition {
    /**
     * @returns {string} The name of the map.
     */
    GetName: () => string

    /**
     * @returns {number} The ID of the map.
     */
    GetID: () => number

    /**
     * @returns {string} The map name localization key.
     */
    GetNameLocKey: () => string
}
