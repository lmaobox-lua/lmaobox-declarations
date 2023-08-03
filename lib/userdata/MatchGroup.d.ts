/**
 * The `MatchGroup` object describes a single type of queue in TF2 matchmaking.
 */
interface MatchGroup {
    /**
     * @returns {number} The ID of the match group.
     */
    GetID: () => number

    /**
     * @returns {string} The name of the match group.
     */
    GetName: () => string

    /**
     * @returns {string} The name of the match group in the language of the current player.
     */
    GetNameTranslated: () => string

    /**
     * @returns {boolean} Whether the match group is a competitive mode. Can return false if you are using a competitive bypass feature.
     */
    IsCompetitiveMode: () => boolean
}
