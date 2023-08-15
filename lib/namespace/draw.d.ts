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
     * Draw a rectangle with a fade. The fade is horizontal by default, but can be vertical by setting horizontal to false. The alpha values are between 0 and 255.
     * @param x1 - The x-coordinate of the top-left corner of the rectangle.
     * @param y1 - The y-coordinate of the top-left corner of the rectangle.
     * @param x2 - The x-coordinate of the bottom-right corner of the rectangle.
     * @param y2 - The y-coordinate of the bottom-right corner of the rectangle.
     * @param alpha1 - The alpha value at the top or left side of the rectangle.
     * @param alpha2 - The alpha value at the bottom or right side of the rectangle.
     * @param horizontal - Whether the fade is horizontal (true) or vertical (false).
     */
    function FilledRectFade(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        alpha1: number,
        alpha2: number,
        horizontal: boolean
    ): void

    /**
     * Draws a fade between the fadeStartPt and fadeEndPT points. The fade is horizontal by default, but can be vertical by setting horizontal to false. The alpha values are between 0 and 255.
     * @param x1 - The x-coordinate of the top-left corner of the rectangle.
     * @param y1 - The y-coordinate of the top-left corner of the rectangle.
     * @param x2 - The x-coordinate of the bottom-right corner of the rectangle.
     * @param y2 - The y-coordinate of the bottom-right corner of the rectangle.
     * @param fadeStartPt - The point where the fade starts.
     * @param fadeEndPt - The point where the fade ends.
     * @param alpha1 - The alpha value at the start of the fade.
     * @param alpha2 - The alpha value at the end of the fade.
     * @param horizontal - Whether the fade is horizontal (true) or vertical (false).
     */
    function FilledRectFastFade(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        fadeStartPt: number,
        fadeEndPt: number,
        alpha1: number,
        alpha2: number,
        horizontal: boolean
    ): void

    /**
     * Draw a colored circle with center at centerx, centery and radius radius. The color is specified by r, g, b, a.
     * @param centerx - The x-coordinate of the center of the circle.
     * @param centery - The y-coordinate of the center of the circle.
     * @param radius - The radius of the circle.
     * @param r - The red component of the color.
     * @param g - The green component of the color.
     * @param b - The blue component of the color.
     * @param a - The alpha component of the color.
     */
    function ColoredCircle(
        centerx: number,
        centery: number,
        radius: number,
        r: number,
        g: number,
        b: number,
        a: number
    ): void

    /**
     * Draw an outlined circle with center at centerx, centery and radius radius. The circle is made up of segments number of lines.
     * @param x - The x-coordinate of the center of the circle.
     * @param y - The y-coordinate of the center of the circle.
     * @param radius - The radius of the circle.
     * @param segments - The number of line segments to use to draw the circle.
     */
    function OutlinedCircle(
        x: number,
        y: number,
        radius: number,
        segments: number
    ): void

    /**
     * Get the size of the given text with the current font.
     * @param text - The text to measure.
     * @returns The width and height of the text in pixels.
     */
    function GetTextSize(text: string): LuaMultiReturn<[number, number]>

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
     * Draw the texture by textureId as a polygon.
     * @param textureId - The ID of the texture to draw.
     * @param vertices - A list of tables, each containing 4 values: x,y of the vertex, and u,v of the tex coordinate.
     * @param clipVertices - Whether the resulting polygon should be clipped to the screen or not.
     */
    function TexturedPolygon(
        textureId: number,
        vertices: Array<[number, number, number, number]>,
        clipVertices: boolean
    ): void

    /**
     * Delete the given texture from memory.
     * @param textureId - The ID of the texture to delete.
     */
    function DeleteTexture(textureId: number): void
}
