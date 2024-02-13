export function convertFromBytes(bytes, decimals = 2) {
  const size = ["B", "K", "M", "G", "T", "PB", "EB", "ZB", "YB"];
  const factor = Math.floor((String(bytes).length - 1) / 3);

  return (bytes / 1024 ** factor).toFixed(decimals) + size[factor];
}
