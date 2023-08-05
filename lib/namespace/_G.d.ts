/** @noSelfInFile **/

/**
 * @param table - The Lua table.
 * @param n - undocumented
 */
declare function printLuaTable(
    table: LuaPairsIterable<any, any>,
    n?: number
): void

/**
 * @param r - the red component of the color (0-255)
 * @param g - the green component of the color (0-255)
 * @param b - the blue component of the color (0-255)
 * @param text - The text to print.
 */
declare function printc(r: number, g: number, b: number, text: string): void

/**
 * @param filePath - The path to the script to load.
 */
declare function LoadScript(filePath: string): void

/**
 * @param filePath - The path to the script to unload.
 */
declare function UnloadScript(filePath: string): void

/**
 * Wrapper for debug.getinfo()
 * @returns The name of the currently executing script.
 */
declare function GetScriptName(): void
