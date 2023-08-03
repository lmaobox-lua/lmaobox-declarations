/** @noSelfInFile **/
/**
 * The `gui` module provides functions for getting and setting menu values.
 */

declare namespace gui {
    /**
     * @param msg - The name of the menu label to get.
     * @returns The current value of the setting.
     */
    function GetValue(msg: string): string | number

    /**
     * @param msg - The name of the menu label to set.
     * @param value - The value to set the setting to.
     */
    function SetValue(msg: string, value: string | number): void
}
