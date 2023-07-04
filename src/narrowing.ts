

function padLeft(padding: number | string, input: string) {
  //const invalid = " ".repeat(padding)
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}