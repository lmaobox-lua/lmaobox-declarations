/** @noSelfInFile **/
/**
 * The `input` module provides an interface to the user's keyboard and mouse.
 */
declare namespace input {
    /**
     * @returns The current mouse position (x, y).
     */
    function GetMousePos(): [number, number]

    /**
     * @param button - The button to check. Use 1 for the left mouse button, 2 for the right mouse button, and 3 for the middle mouse button.
     * @returns Whether the specified mouse button is down.
     */
    function IsButtonDown(button: number): boolean

    /**
     * @param button - The button to check. Use 1 for the left mouse button, 2 for the right mouse button, and 3 for the middle mouse button.
     * @returns Whether the specified mouse button was pressed.
     */
    function IsButtonPressed(button: number): LuaMultiReturn<[boolean, number]>

    /**
     * @param button - The button to check. Use 1 for the left mouse button, 2 for the right mouse button, and 3 for the middle mouse button.
     * @returns Whether the specified mouse button was released.
     */
    function IsButtonReleased(button: number): LuaMultiReturn<[boolean, number]>

    /**
     * @returns Whether the mouse input is currently enabled.
     */
    function IsMouseInputEnabled(): boolean

    /**
     * Sets whether the mouse is visible on screen and has priority on the topmost panel.
     * @param enabled - Whether to enable or disable mouse input.
     */
    function SetMouseInputEnabled(enabled: boolean): void

    /**
     * @returns The tick when buttons have last been polled.
     */
    function GetPollTick(): number
}
