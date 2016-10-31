export default function(src, target) {
  if (src.length !== target.length) return false;
  const tArray = target.split('');
  const filtered = tArray.filter((l, i) => {
    if (src[i] === l) {
      return l
    } else if (src[i] === l.toUpperCase()) {
      return l
    }
  })
  return filtered.length === src.length 
}
