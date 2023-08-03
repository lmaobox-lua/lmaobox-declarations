/** @noSelfInFile **/
/**
 * The `draw` library provides functions for drawing shapes, text, and textures.
 */
declare namespace draw {
    /**
     * Set the color for drawing shapes and text.
     * @param r - The red component of the color (0-255).
     * @param g - The green component of the color (0-255).
     * @param b - The blue component of the color (0-255).
     * @param a - The alpha component of the color (0-255).
     */
    function Color(r: number, g: number, b: number, a: number): void

    /**
     * Draw a line from (x1, y1) to (x2, y2).
     * @param x1 - The x-coordinate of the starting point.
     * @param y1 - The y-coordinate of the starting point.
     * @param x2 - The x-coordinate of the ending point.
     * @param y2 - The y-coordinate of the ending point.
     */
    function Line(x1: number, y1: number, x2: number, y2: number): void

    /**
     * Draw a filled rectangle with top-left corner at (x1, y1) and bottom-right corner at (x2, y2).
     * @param x1 - The x-coordinate of the top-left corner.
     * @param y1 - The y-coordinate of the top-left corner.
     * @param x2 - The x-coordinate of the bottom-right corner.
     * @param y2 - The y-coordinate of the bottom-right corner.
     */
    function FilledRect(x1: number, y1: number, x2: number, y2: number): void

    /**
     * Draw an outlined rectangle with top-left corner at (x1, y1) and bottom-right corner at (x2, y2).
     * @param x1 - The x-coordinate of the top-left corner.
     * @param y1 - The y-coordinate of the top-left corner.
     * @param x2 - The x-coordinate of the bottom-right corner.
     * @param y2 - The y-coordinate of the bottom-right corner.
     */
    function OutlinedRect(x1: number, y1: number, x2: number, y2: number): void

    /**
     * Get the size of the given text with the current font.
     * @param text - The text to measure.
     * @returns An object with the width and height of the text in pixels.
     */
    function GetTextSize(text: string): { width: number; height: number }

    /**
     * Draw the given text at (x, y).
     * @param x - The x-coordinate of the starting point.
     * @param y - The y-coordinate of the starting point.
     * @param text - The text to draw.
     */
    function Text(x: number, y: number, text: string): void

    /**
     * Draw the given text with a shadow at (x, y).
     * @param x - The x-coordinate of the starting point.
     * @param y - The y-coordinate of the starting point.
     * @param text - The text to draw.
     */
    function TextShadow(x: number, y: number, text: string): void

    /**
     * Get the game resolution settings.
     * @returns An object with the width and height of the game resolution in pixels.
     */
    function GetScreenSize(): { width: number; height: number }

    /**
     * Create a font with the given name, height, and weight.
     * @param name - The name of the font.
     * @param height - The height of the font in pixels.
     * @param weight - The weight of the font (100-900).
     * @param fontFlags - Optional flags for the font (default: FONTFLAG_CUSTOM | FONTFLAG_ANTIALIAS).
     * @returns The ID of the newly created font.
     */
    function CreateFont(
        name: string,
        height: number,
        weight: number,
        fontFlags?: number
    ): number

    /**
     * Add a font resource by path to a TTF file, relative to the Team Fortress 2 folder.
     * @param pathTTF - The path to the TTF file.
     */
    function AddFontResource(pathTTF: string): void

    /**
     * Set the current font for drawing text.
     * @param font - The ID of the font to use.
     */
    function SetFont(font: number): void

    /**
     * Create a texture from an image file at the given path.
     * @param imagePath - The path to the image file (relative to %localappdata%).
     * @returns The ID of the newly created texture.
     */
    function CreateTexture(imagePath: string): number

    /**
     * Create a texture from raw RGBA data.
     * @param rgbaBinaryData - The raw RGBA data.
     * @param width - The width of the texture in pixels.
     * @param height - The height of the texture in pixels.
     * @returns The ID of the newly created texture.
     */
    function CreateTextureRGBA(
        rgbaBinaryData: string,
        width: number,
        height: number
    ): number

    /**
     * Get the size of the given texture.
     * @param textureId - The ID of the texture.
     * @returns An object with the width and height of the texture in pixels.
     */
    function GetTextureSize(textureId: number): {
        width: number
        height: number
    }

    /**
     * Draw the given texture as a rectangle with top-left corner at (x1, y1) and bottom-right corner at (x2, y2).
     * @param textureId - The ID of the texture to draw.
     * @param x1 - The x-coordinate of the top-left corner.
     * @param y1 - The y-coordinate of the top-left corner.
     * @param x2 - The x-coordinate of the bottom-right corner.
     * @param y2 - The y-coordinate of the bottom-right corner.
     */
    function TexturedRect(
        textureId: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number
    ): void

    /**
     * Delete the given texture from memory.
     * @param textureId - The ID of the texture to delete.
     */
    function DeleteTexture(textureId: number): void
}
