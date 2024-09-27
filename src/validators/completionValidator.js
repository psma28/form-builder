export function completionValidator(input) {
  input = input.trim();
  const valid = input !== "" && input !== null;
  if (!valid) return { valid, message: "Complete el campo, por favor" };
  return { valid };
}
