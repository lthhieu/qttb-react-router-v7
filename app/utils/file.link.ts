interface FileLinkProps {
    file: string;       // base64 string
    mimetype: string;   // ví dụ: application/pdf, application/msword
    filename?: string;   // tên file khi tải về
}

export const FileLink = (file: string, mimetype: string) => {
    // Convert base64 -> blob url
    const byteCharacters = atob(file);
    const byteNumbers: number[] = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimetype });
    const url = URL.createObjectURL(blob);

    return url
};
