interface Entity {
    /**
     * @param name - The name of the attribute.
     * @param value - The default value of the attribute. (default = 1)
     * @returns The value of the attribute multiplied by the default value.
     * @see {@link https://wiki.teamfortress.com/wiki/List_of_item_attributes}
     */
    AttributeHookFloat: (name: string, value?: number) => number

    /**
     * @param name - The name of the attribute.
     * @param value - The default value of the attribute. (default = 1)
     * @returns The value of the attribute multiplied by the default value.
     * @see {@link https://wiki.teamfortress.com/wiki/List_of_item_attributes}
     */
    AttributeHookInt: (name: string, value?: number) => number
}
