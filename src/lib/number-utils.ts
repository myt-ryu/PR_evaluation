/**
 * 全角数字を半角に変換し、先頭の0を削除
 * @param value 入力値
 * @returns 正規化された数値文字列
 */
export function normalizeNumber(value: string): string {
    // 全角数字を半角に変換
    const halfWidth = value.replace(/[０-９]/g, (s) =>
        String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    );

    // 数字以外を削除
    const numbersOnly = halfWidth.replace(/[^0-9]/g, '');

    // 先頭の0を削除（ただし "0" 単体は残す）
    const normalized = numbersOnly.replace(/^0+(?=\d)/, '');

    return normalized || '0';
}
