/** @noSelfInFile **/
/**
 * The `filesystem` library provides a simple interface to the filesystem.
 */

declare namespace filesystem {
    /**
     * Creates a directory at the specified relative or absolute path.
     * @param path - The path of the directory to create.
     * @returns Wether the directory was created, and the folderPath of the directory.
     * @see {@link https://docs.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-createdirectorya}
     */
    function CreateDirectory(path: string): LuaMultiReturn<[boolean, string]>

    /**
     * Enumerates the files and directories in the specified directory.
     * The callback function receives the filename and attributes of each file or directory.
     * @param path - The path of the directory to enumerate.
     * @param callback - The callback function to call for each file or directory.
     * @see {@link https://learn.microsoft.com/en-us/windows/win32/fileio/listing-the-files-in-a-directory}
     */
    function EnumerateDirectory(
        path: string,
        callback: (filename: string, attributes: number) => void
    ): void

    /**
     * @param path - The path of the file to get the times for.
     * @returns The creation time, last access time, and last write time of the file.
     * @see {@link https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-getfiletime}
     */
    function GetFileTime(path: string): LuaMultiReturn<[number, number, number]>

    /**
     * @param path - The path of the file to get the attributes for.
     * @returns The attributes of the file.
     * @see {@link https://learn.microsoft.com/en-us/windows/win32/fileio/file-attribute-constants}
     */
    function GetFileAttributes(path: string): number

    /**
     * @param path - The path of the file to set the attributes for.
     * @param attributes - The attributes to set for the file.
     * @see {@link https://learn.microsoft.com/en-us/windows/win32/fileio/file-attribute-constants}
     */
    function SetFileAttributes(path: string, attributes: number): void
}
