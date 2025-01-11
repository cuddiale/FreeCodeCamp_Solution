function wrap(text, limit) {
  const noNewlines = text.replace("\n", "");
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(" ");
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + "\n" + wrap(remainder, limit);
    }
  }
  return text;
}
