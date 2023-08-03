/**
 * The `PartyMemberActivity` class is used to provide information about a party member.
 */
interface PartyMemberActivity {
    /**
     * Returns the name of the party member's activity.
     * @returns {string} The name of the party member's activity.
     * undocumented
     */
    GetName: () => string

    /**
     * @returns {number} The ID of the party member's activity.
     */
    GetID: () => number

    /**
     * @returns {string} The localization key for the name of the party member's activity.
     */
    GetNameLocKey: () => string
}
