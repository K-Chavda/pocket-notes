export default function getInitials(inputString) {
  if (inputString) {
    const words = inputString.trim().split(/\s+/);
    const initials = [];
    for (let i = 0; i < Math.min(words.length, 2); i++) {
      initials.push(words[i][0].toUpperCase());
    }
    return initials.join("");
  }
}
