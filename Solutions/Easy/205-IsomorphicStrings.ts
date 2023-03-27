function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const s2t = {};
  const t2s = {};
  const len: number = s.length;
  for (let i: number = 0; i < len; ++i) {
    const x: string = s[i],
      y: string = t[i];
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
      return false;
    }
    s2t[x] = y;
    t2s[y] = x;
  }
  return true;
}