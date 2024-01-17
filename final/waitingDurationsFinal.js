/* 
Update the waiting durations so that text is printed in the following order:

Firing up the forge...
Smelting Iron Bars...
Combining Materials...
Shaping Iron...
Iron Longsword Complete!

The time required to complete a round of crafting is 2 seconds, so make sure none of the wait times are greater than 2000 ms. 
*/

const craftingCompleteWait = 300;
const combiningMaterialsWait = 100;
const smeltingIronBarsWait = 0;
const shapingIronWait = 200;

setTimeout(() => {
  console.log("Iron Longsword Complete!");
}, craftingCompleteWait);
setTimeout(() => {
  console.log("Combining Materials...");
}, combiningMaterialsWait);
setTimeout(() => {
  console.log("Smelting Iron Bars...");
}, smeltingIronBarsWait);
setTimeout(() => {
  console.log("Shaping Iron...");
}, shapingIronWait);

console.log("FIRING up the forge...");

sleep(2500);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
