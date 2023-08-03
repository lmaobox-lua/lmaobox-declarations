/** @noSelfInFile **/
/**
 * The `warp` library provides access to the warp exploit feature of TF2.
 */
declare namespace warp {
    /**
     * @returns The amount of charged warp ticks.
     */
    function GetChargedTicks(): number

    /**
     * Since the period of warping is super short,
     * this is only really useful in `CreateMove` callbacks where you can use it to do your logic.
     * @returns Whether the user is currently warping.
     */
    function IsWarping(): boolean

    /**
     * Does not guarantee a full charge or a double tap.
     * @returns Whether we can warp or not.
     */
    function CanWarp(): boolean

    /**
     * Extension of CanWarp with additional checks.
     * @param weapon - The weapon to check for double tap.
     * @returns Whether the weapon can double tap.
     */
    function CanDoubleTap(weapon: Entity): boolean

    /**
     * Triggers a warp.
     */
    function TriggerWarp(): void

    /**
     * Triggers a warp with double tap.
     */
    function TriggerDoubleTap(): void

    /**
     * Triggers a charge of warp ticks.
     */
    function TriggerCharge(): void
}
