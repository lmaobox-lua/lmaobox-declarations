interface Entity {
    /**
     * @param {string} name - The name of the attribute.
     * @param {number} [defaultValue=1.0] - The default value of the attribute.
     * @returns {number} The value of the attribute multiplied by the default value.
     * @see {@link https://wiki.teamfortress.com/wiki/List_of_item_attributes}
     */
    AttributeHookFloat: (name: string, defaultValue?: number) => number

    /**
     * @param {string} name - The name of the attribute.
     * @param {number} [defaultValue=1] - The default value of the attribute.
     * @returns {number} The value of the attribute multiplied by the default value.
     * @see {@link https://wiki.teamfortress.com/wiki/List_of_item_attributes}
     */
    AttributeHookInt: (name: string, defaultValue?: number) => number
}
