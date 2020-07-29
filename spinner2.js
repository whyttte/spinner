let spin = {1: '\r|   ', 2: '\r/   ', 3: '\r/   ', 4: '\r-   ', 5: '\r\\   ', 6: '\r/   ', 7: '\r-   ', 8: '\r|   '};
let delay = 0;
process.stdout.write('hello from spinner1.js... \rheyyy\n');
while (delay <= 4200) {
  for (let sp in spin) {
  setTimeout(() => {
  process.stdout.write(spin[sp])}, delay);
  delay += 600;
}
};