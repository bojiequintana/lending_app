export function capitalizeFirstLetter(str: string) {
  if (!str) return ""; // Handle empty string or null input
  return str.charAt(0).toUpperCase() + str.slice(1);
}
