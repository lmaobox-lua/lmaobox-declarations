/**
 * Represents a user (movement) command about to be sent to the server. For more in-depth insight see the [UserCmd](https://developer.valvesoftware.com/wiki/Usercmd) page.
 */
interface UserCmd {
    /**
     * The number of the command.
     */
    command_number: number

    /**
     * The current tick count.
     */
    tick_count: number

    /**
     * The view angles of the player.
     */
    viewangles: EulerAngles

    /**
     * The forward movement of the player.
     */
    forwardmove: number

    /**
     * The sideways movement of the player.
     */
    sidemove: number

    /**
     * The upward movement of the player.
     */
    upmove: number

    /**
     * The buttons that are pressed. Masked with bits from the IN_* enum.
     */
    buttons: number

    /**
     * The impulse command that was issued.
     */
    impulse: number

    /**
     * The weapon id that is selected.
     */
    weaponselect: number

    /**
     * The subtype of the weapon.
     */
    weaponsubtype: number

    /**
     * The random seed of the command.
     */
    random_seed: number

    /**
     * The mouse delta in the x direction.
     */
    mousedx: number

    /**
     * The mouse delta in the y direction.
     */
    mousedy: number

    /**
     * Whether the command has been predicted.
     */
    hasbeenpredicted: boolean

    /**
     * Whether the command should be sent to the server or choked.
     */
    sendpacket: boolean

    /**
     * @param pitch - The pitch angle to set.
     * @param yaw - The yaw angle to set.
     * @param roll - The roll angle to set.
     */
    SetViewAngles: (pitch: number, yaw: number, roll: number) => void

    /**
     * @returns The view angles of the player.
     */
    GetViewAngles: () => EulerAngles

    /**
     * @param sendpacket - Whether the command should be sent to the server or choked.
     */
    SetSendPacket: (sendpacket: boolean) => void

    /**
     * @returns Whether the command should be sent to the server or choked.
     */
    GetSendPacket: () => boolean

    /**
     
     * @param buttons - The buttons that are pressed.
     */
    SetButtons: (buttons: number) => void

    /**
     * @returns The buttons that are pressed.
     */
    GetButtons: () => number

    /**
     * @param factor - The forward movement of the player.er.
     */
    SetForwardMove: (factor: number) => void

    /**
     * @returns The forward movement of the player.
     */
    GetForwardMove: () => number

    /**
     * @param factor - The sideways movement of the player.
     */
    SetSideMove: (factor: number) => void

    /**
     * @returns The sideways movement of the player.
     */
    GetSideMove: () => number

    /**
     * @param factor - The upward movement of the player.
     */
    SetUpMove: (factor: number) => void

    /**
     * @returns The upward movement of the player.
     */
    GetUpMove: () => number
}
