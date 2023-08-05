/**
 * Received as the only argument in DispatchUserMessage callback.
 */
interface UserMessage {
    /**
     * @returns The ID of the message.
     */
    GetID: () => number

    /**
     * @returns The length of the message in bits.
     */
    GetDataBits: () => number

    /**
     * @returns The length of the message in bytes.
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
     * @returns The byte read as the first return value, and current bit position as the second return value.
     */
    ReadByte: () => LuaMultiReturn<[number, number]>

    /**
     * Reads a bit from the message.
     * @returns The bit read as the first return value, and current bit position as the second return value.
     */
    ReadBit: () => LuaMultiReturn<[number, number]>

    /**
     * Reads 4 bytes from the message and returns it as a float.
     * @param  bitLength - The number of bits to read. Default is 32 (4 bytes).
     * @returns The float read as the first return value, and current bit position as the second return value.
     */
    ReadFloat: (bitLength?: number) => LuaMultiReturn<[number, number]>

    /**
     * Reads 4 bytes from the message and returns it as an integer.
     * @param bitLength - The number of bits to read. Default is 32 (4 bytes).
     * @returns The integer read as the first return value, and current bit position as the second return value.
     */
    ReadInt: (bitLength?: number) => LuaMultiReturn<[number, number]>

    /**
     * @param maxlen - The maximum length of the string to read.
     * @returns The string read as the first return value, and current bit position as the second return value.
     */
    ReadString: (maxlen: number) => LuaMultiReturn<[number, number]>

    /**
     * Returns the current cursor position in the message.
     * @returns The current bit position in the message.
     */
    GetCurBit: () => number

    /**
     * Sets the current cursor position in the message.
     * @param bit - The bit position to set.
     */
    SetCurBit: (bit: number) => void

    /**
     * Writes a single bit to the message.
     * @param bit - The bit to write.
     */
    WriteBit: (bit: number) => void

    /**
     * Writes a single byte to the message.
     * @param byte - The byte to write.
     */
    WriteByte: (byte: number) => void

    /**
     * @param str - The string to write.
     */
    WriteString: (str: string) => void

    /**
     * @param int - The integer to write.
     * @param bitLength - The number of bits to write. Default is 32 (4 bytes).
     */
    WriteInt: (int: number, bitLength?: number) => void

    /**
     * @param value - The float to write.
     * @param bitLength - The number of bits to write. Default is 32 (4 bytes).
     */
    WriteFloat: (value: number, bitLength?: number) => void
}
