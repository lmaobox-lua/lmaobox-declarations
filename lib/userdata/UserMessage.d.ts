/**
 * Received as the only argument in DispatchUserMessage callback.
 */
interface UserMessage {
    /**
     * @returns {number} The ID of the message.
     */
    GetID: () => number

    /**
     * @returns {number} The length of the message in bits.
     */
    GetDataBits: () => number

    /**
     * @returns {number} The length of the message in bytes.
     */
    GetDataBytes: () => number

    /**
     * Resets the read position to the beginning of the message.
     * This is useful if you want to read the message multiple times, but it is not necessary.
     * Each callback receives an already reset user message.
     */
    Reset: () => void

    /**
     * Reads a byte from the message.
     * @returns {[number, number]} The byte read as the first return value, and current bit position as the second return value.
     */
    ReadByte: () => [number, number]

    /**
     * Reads a bit from the message.
     * @returns {[number, number]} The bit read as the first return value, and current bit position as the second return value.
     */
    ReadBit: () => [number, number]

    /**
     * Reads 4 bytes from the message and returns it as a float.
     * @param {number} [bitLength=32] - The number of bits to read. Default is 32 (4 bytes).
     * @returns {[number, number]} The float read as the first return value, and current bit position as the second return value.
     */
    ReadFloat: (bitLength?: number) => [number, number]

    /**
     * Reads 4 bytes from the message and returns it as an integer.
     * @param {number} [bitLength=32] - The number of bits to read. Default is 32 (4 bytes).
     * @returns {[number, number]} The integer read as the first return value, and current bit position as the second return value.
     */
    ReadInt: (bitLength?: number) => [number, number]

    /**
     * @param {number} maxlen - The maximum length of the string to read.
     * @returns {[string, number]} The string read as the first return value, and current bit position as the second return value.
     */
    ReadString: (maxlen: number) => [string, number]

    /**
     * Returns the current cursor position in the message.
     * @returns {number} The current bit position in the message.
     */
    GetCurBit: () => number

    /**
     * Sets the current cursor position in the message.
     * @param {number} bit - The bit position to set.
     */
    SetCurBit: (bit: number) => void

    /**
     * Writes a single bit to the message.
     * @param {number} bit - The bit to write.
     */
    WriteBit: (bit: number) => void

    /**
     * Writes a single byte to the message.
     * @param {number} byte - The byte to write.
     */
    WriteByte: (byte: number) => void

    /**
     * @param {string} str - The string to write.
     */
    WriteString: (str: string) => void

    /**
     * @param {number} int - The integer to write.
     * @param {number} [bitLength=32] - The number of bits to write. Default is 32 (4 bytes).
     */
    WriteInt: (int: number, bitLength?: number) => void

    /**
     * @param {number} value - The float to write.
     * @param {number} [bitLength=32] - The number of bits to write. Default is 32 (4 bytes).
     */
    WriteFloat: (value: number, bitLength?: number) => void
}
