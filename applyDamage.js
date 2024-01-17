/* 
Complete the applyDamage function that takes two parameters:

damage
currentHP
It should return a Promise after 1 second because in Fantasy Quest dealing damage with an attack takes some time!

If the damage inflicted would reduce the player's HP to 0 or less, the promise will reject with the string:

The player suffers DAMAGE points of damage and has fallen unconscious.

Otherwise, the promise will resolve with the string:

The player suffers DAMAGE points of damage and has NEWHP hit points remaining.

Where:

DAMAGE is the amount of damage inflicted.
NEWHP is the player's HP after the damage is applied.
 */

const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // ?
    }, 1000);
  });
};

// Don't touch below this line

function runApplyDamageTest(damage, currentHP) {
  console.log(`Applying ${damage} damage to player with ${currentHP} HP...`);
  applyDamage(damage, currentHP)
    .then((message) => {
      console.log(`...applyDamage resolved with: ${message}`);
    })
    .catch((message) => {
      console.log(`...applyDamage rejected with: ${message}`);
    });
}

runApplyDamageTest(27, 50);
await sleep(1100);
runApplyDamageTest(50, 50);
await sleep(1100);
runApplyDamageTest(110, 100);
await sleep(1100);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
