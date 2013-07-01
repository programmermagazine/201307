var log = console.log;

for (i=1;i<=10;i++) {
  if (i == 3) continue;
  if (i == 8) break;
  log("i="+i);
}