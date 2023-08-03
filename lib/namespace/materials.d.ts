/** @noSelfInFile **/
/**
 * The `materials` library provides functions to create and alter materials for rendering.
 */
declare namespace materials {
    /**
     * @param name - The name of the material to find.
     * @returns The Material object or undefined if not found.
     */
    function Find(name: string): Material | undefined

    /**
     * Enumerate all loaded materials and call the callback function for each one.
     * The callback function receives the Material object
     * @param callback - The function to call for each material.
     */
    function Enumerate(callback: (mat: Material) => void): void

    /**
     * Create custom material following the Valve Material Type syntax.
     * VMT should be a string containing the full material definition.
     * Name should be a unique name of the material.
     * @param name - The unique name of the material to create.
     * @param vmt - The full material definition as a string.
     * @returns The created Material object or undefined if creation failed.
     * @see {@link https://developer.valvesoftware.com/wiki/VMT}
     */
    function Create(name: string, vmt: string): Material | undefined
}
