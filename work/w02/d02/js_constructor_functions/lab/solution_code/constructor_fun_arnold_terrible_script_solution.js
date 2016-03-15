//  _____     _        _ _         ____                _ _   _   _
// |_   _|__ | |_ __ _| | |_   _  |  _ \ ___  ___ __ _| | | | |_| |__   ___
//   | |/ _ \| __/ _` | | | | | | | |_) / _ \/ __/ _` | | | | __| '_ \ / _ \
//   | | (_) | || (_| | | | |_| | |  _ <  __/ (_| (_| | | | | |_| | | |  __/
//   |_|\___/ \__\__,_|_|_|\__, | |_| \_\___|\___\__,_|_|_|  \__|_| |_|\___|
//                         |___/
//  _____      _                    ____       ____
// |  ___|   _| |_ _   _ _ __ ___  |___ \ _   / ___|___  _ __   __ _ _ __
// | |_ | | | | __| | | | '__/ _ \   __) (_) | |   / _ \| '_ \ / _` | '_ \
// |  _|| |_| | |_| |_| | | |  __/  / __/ _  | |__| (_) | | | | (_| | | | |
// |_|   \__,_|\__|\__,_|_|  \___| |_____(_)  \____\___/|_| |_|\__,_|_| |_|
//                  _   ____       _           _                  _ _   _
//   __ _ _ __   __| | |  _ \ ___ | |__   ___ | |_ ___  __      _(_) |_| |__
//  / _` | '_ \ / _` | | |_) / _ \| '_ \ / _ \| __/ __| \ \ /\ / / | __| '_ \
// | (_| | | | | (_| | |  _ < (_) | |_) | (_) | |_\__ \  \ V  V /| | |_| | | |
//  \__,_|_| |_|\__,_| |_| \_\___/|_.__/ \___/ \__|___/   \_/\_/ |_|\__|_| |_|
//  ____        _
// | __ )  __ _| |_ _ __ ___   __ _ _ __
// |  _ \ / _` | __| '_ ` _ \ / _` | '_ \
// | |_) | (_| | |_| | | | | | (_| | | | |
// |____/ \__,_|\__|_| |_| |_|\__,_|_| |_|

// by Arnold Schwarzenegger

/* ACT ONE */

/* One day, a man entered the world that would change the world and everything, but
 especially the world, forever.

His name was Arnold Schwarzenegger.  */

var arnold = {
  firstName: "Arnold",
  lastName:  "Schwarzenegger",
  oneLiners: [
               "You should not drink and bake."
              ],
  health:    10000,
  scream:    "You son of a...",
  puny:      false,
  friends:   [
              "Carl Weathers"
             ],
  punch:     function(enemy) {
               enemy.health -= 50;
               if (enemy.health < 0) console.log(enemy.scream);
  },
  smilinFace: "images/arnold_yell.jpg"
}

/* He was the son of Gustav and Aurelia Schwarzenegger. */




    // Create a Schwarzenegger constructor function then create Arnold's parents.

    // Include a health key
    // Include a gender key
    // Include a name key

var Schwarzenegger = function(health, gender, name) {
  this.health = health;
  this.gender = gender;
  this.name = name;
}

var mahm = new Schwarzenegger(50, "F", "Aurelia");
var dahd = new Schwarzenegger(50, "M", "Gustav");

/* Arnold was a special boy from day one, but he experienced tragedy early on. */

var batman = {
  name: "Bruce Wayne",
  revenge: function(enemies) {
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].health = 0;
    }
  }
}

// Use the batman object's method revenge to kill both parents.

batman.revenge([mahm, dahd]);


/* After that day, at a mere age of 7, Arnold swore revenge. */



    // Add an age key to arnold and set the value to 7
    // Add a swearRevenge key to arnold and set it to the batman variable.

arnold.age = 7;
arnold.swearRevenge = batman;

/* Arnold then moved to the jungle to train for his future fight. He learned much
and grew strong chopping down the vines in the jungle.

With the sword in his hand he decided to change his name to Conan. He knew his future
woudl be as a warrior. */

    // Change the arnold object's firstName value to "Conan"
    // Push the string "Stick around!" into the arnold.oneLiners array!

arnold.firstName = "Conan";
arnold.oneLiners.push("Stick around!");

arnold.machete = function(enemy) {
  enemy.health -= 500;
  if (enemy.health < 0) {
    console.log(this.oneLiners[1]);
    return enemy.scream;
  }
}

/* Conan moved on from the jungle, and met a young, brilliant scientist named
Dr. Larry Arbogast */

    // Create a larry object
    // Add a key doctor and set it to true
    // Add a key health and set it to 30
    // Add a key name and set it to "Dr. Larry Arbogast"

    // Push larry's name into the arnold object's friends array

var larry = {
  doctor: true,
  health: 30,
  name: "Dr. Larry Arbogast"
}

arnold.friends.push(larry.name);


/* They became friends - best friends. That is until batman killed him too!*/


    // Use the revenge method again and kill larry (don't forget to pass him
    // into the function as an array!).

batman.revenge([larry]);


/* Conan realized he would never be happy unless he went after batman */


/* ACT 2 */

/* No one knew why Batman hated Conan so much. But Batman had plans to erase
Conan from the planet forever. He was building an army. */


    // Build a henchbat (henchmen, but for batman) constructor function
    // Have a health key
    // Have a boss key set to batman
    // Have a scream key
    // Have a function that damages an enemy signature called shoot
    // Have an alarm function that calls out when an intruder is present

var Henchbat = function(health, scream) {
  this.health = health;
  this.boss = batman;
  this.scream = scream;
}

Henchbat.prototype.shoot = function(enemy) {
  enemy.health -= 50;
  if (enemy.health < 1) return enemy.scream;
}

Henchbat.prototype.alarm = function(enemy) {
  alert("Intruder! " + enemy.name);
}

    // Create 3 henchmen

var kyle = new Henchbat(75, "Mama Mia! What a meatball!");
var greg = new Henchbat(60, "Darn I'm dead!");
var craig = new Henchbat(65, "This job sucked. I didn't even get any boots.");


/* Bruce Wayne knew these henchmen would only slow him down - he had another
plan up his sleeve. */

/* Conan came to Gotham, the supposed streets of Batman. He was determined to
defeat the evil Batman. He went to the nearest gun shop and bought a shotgun.*/

    // Push the string "Hasta la Vista... baby." into arnold.oneLiners

arnold.oneLiners.push("Hasta la Vista... baby.")

    // Create a shotgun method on arnold
    // It should take three enemies and reduces their health by 100.
    // If their health goes below 1, make them scream!
    // Log out Hasta La Vista from the arnold object's oneLiners array to the
    // console.

arnold.shotgun = function(enemy1, enemy2, enemy3) {
    enemy1.health -= 100;
    enemy2.health -= 100;
    enemy3.health -= 100;
    if (enemy1.health < 1) console.log(enemy1.scream);
    if (enemy2.health < 1) console.log(enemy2.scream);
    if (enemy3.health < 1) console.log(enemy3.scream);
}

/* On one of Batman's nightly patrols, he sees Conan roaming his streets with
a shotgun! Batman sends out three henchmen to take out Conan. */

    // Have a gunfight in the streets of gotham!
    // Make sure Conan wins!

greg.shoot(arnold);
kyle.shoot(arnold);
arnold.shotgun(kyle, greg, craig);


/* Conan was bloodied and bruised, but he was ready for more. Batman looked down
on him from a steeple. He called out

"Hey Conan! You won't make it out of these streets alive."

"But I've done nothing to you! Why all de death, Batman?" replied Conan.

"It's not what you've done - it's what you did do in the future."

Conan was confused. How could he have done something in the future?

He realized, if he was going to make it out of this alive, he needed bigger
weapons. */

/* ACT 3 */

/* Conan bought a ton of dynamite for his next encounter with the Batman. */


    // Push "Here's my ticket" into the arnold.oneLiners array

arnold.oneLiners.push("Here's my ticket");

arnold.dynamite = function(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7) {
  enemy1.health -= 1000;
  enemy2.health -= 1000;
  enemy3.health -= 1000;
  enemy4.health -= 1000;
  enemy5.health -= 1000;
  enemy6.health -= 1000;
  enemy7.health -= 1000;
  if (enemy1.health < 0) console.log(enemy1.scream);
  if (enemy2.health < 0) console.log(enemy2.scream);
  if (enemy3.health < 0) console.log(enemy3.scream);
  if (enemy4.health < 0) console.log(enemy4.scream);
  if (enemy5.health < 0) console.log(enemy5.scream);
  if (enemy6.health < 0) console.log(enemy6.scream);
  if (enemy7.health < 0) console.log(enemy7.scream);
  console.log(arnold.oneLiners[3]);
}

/* But batman was ready too. He was creating terminators, actual mechanical clones
 of Conan to defeat his nemesis. */

    // Create a terminator constructor function
    // Give them 5 descriptive keys
    // Make sure one is a health key and another is a scream key

    // Create 7 terminators

var Terminator = function(health, scream, flower) {
  this.health      = health;
  this.scream      = scream;
  this.boss        = batman;
  this.alive       = "maybe?";
  this.faveFlower  = flower;
}

Terminator.prototype.shoot = function(enemy) {
  enemy.health -= 100;
  if (enemy.health < 1) console.log(enemy.scream);
}

Terminator.prototype.laserEyes = function(enemy) {
  console.log("BWAAMMM");
  enemy.health -= 500;
  if (enemy.health < 1) console.log(enemy.scream);
}

Terminator.prototype.megaPunch = function(enemy) {
  enemy.health -= 1000;
  if (enemy.health < 1) console.log(enemy.scream);
}

var michael = new Terminator(1000, "May my buffness live on", "daisy");
var miike   = new Terminator(400, "Whatever, I prefer the cloud anyway", "white lily");
var m1ke    = new Terminator(500, "1001010101010001010101010101010100101", "101010101");
var mikey   = new Terminator(50, "But I'm the funny one!", "orchid");
var michel  = new Terminator(900, "Pourquoi!?", "narcissus");
var mich    = new Terminator(300, "MAIN MICH IS DOWN!", "rose")
var doug    = new Terminator(700, "Bogus dude.", "buttercup");

/* Conan received a mysterious letter in the mail from a CW that showed a map
to the Batcave.  With dynamite in hand, Conan felt ready to take on the Batman.

However, just to be safe, he decided to have a cell phone where he could call his
friends. */


    // Add cellphone key to arnold and set it to true.

arnold.cellphone = true;

    // Create a constructor function for Conan's friends.
    // Make 5 distinct keys
    // Ensure they have a function that affects an enemy
    // Make sure they have a scream and a health key.
    // Make sure each reference the arnold object as a bestFriend property

var Friend = function(health, scream, vegetarian, name) {
  this.health     = health;
  this.scream     = scream;
  this.vegetarian = vegetarian;
  this.bestFriend = arnold;
  this.name       = name;
}

Friend.prototype.blast = function(enemy) {
  enemy.health -= 100;
  if (enemy.health < 1) return enemy.scream;
}

    // Create 3 friends
    // Make sure one of them is Carl Weathers

var dannyDevito   = new Friend(40, "I did it for my Twin", false, "Danny Devito");
var lindaHamilton = new Friend(500, "Keep my son safe!", false, "Linda Hamilton");
var carlWeathers  = new Friend(2000, "Whoa, whoa, whoa. There’s still plenty of \
                               meat on these bones. Now you take me home, throw \
                               me in a pot, add some broth, a potato...", true,
                               "Carl Weathers");

// I'm adding an extra method to carlWeathers because he's so cool.
carlWeathers.omegaDestruction = function(enemy) {
  enemy.health -= 1000;
  if (enemy.health < 1) console.log(enemy.scream);
}

/* Conan goes to the batcave with his cellphone and dynamite. And an enormous
battle ensues. */


mikey.laserEyes(arnold);
m1ke.megaPunch(arnold);
michael.laserEyes(arnold);
michel.megaPunch(arnold);

arnold.punch(mikey);                                // Conan kills mikey!

doug.megaPunch(arnold);
miike.megaPunch(arnold);
mich.shoot(arnold);
m1ke.megaPunch(arnold);
michel.laserEyes(arnold);
michael.megaPunch(arnold);
doug.laserEyes(arnold);

arnold.cellphone;                                   // Conan calls his friends!

carlWeathers.blast(mich);
dannyDevito.blast(michael);
lindaHamilton.blast(miike);

michael.laserEyes(dannyDevito);                     // Danny Devito is dead!

console.log(carlWeathers.name + ": NOOOO!! DANNY!");

carlWeathers.omegaDestruction(michael);                           // Mr. Weathers exacts revenge!

arnold.dynamite(mikey, m1ke, michael, mich, doug, michel, miike); // Conan destroys them all
                                                                  // killing mikey and micahel twice

    // Create a fight between Conan and terminators
    // When Conan's health gets low, bring in his friends!

    // Defeat the terminators (bring their health down to 0.)

/* Conan has batman cornered. He's hurt, and isn't going anywhere.

"Why did you kill my parents? Why are you so set on fighting me?" bellowed Conan.

"You ruined me Conan Arnold - you destroyed the idea of Batman. You will turn us
into a joke when you play Mr. Freeze!"

Conan was hurt - he had no idea his future would hurt Batman so bad.

In fact, he was so hurt, he decided to ice Batman.
*/

arnold.oneLiners.push("What killed de Dinosaurs? DE ICE AGE!");

arnold.ice = function(enemy) {
  console.log(arnold.oneLiners[4]);
  enemy.health = 0;
}

arnold.ice(batman);

    // push "What killed de Dinosaurs? DE ICE AGE!" to arnold.oneLiners
    // Add an ice method to arnold that brings an enemy down to zero and
    // logs out a arnold.oneLiners[4]

/* Then Carl Weathers high fived Conan and the world was saved from Batman.

    http://media.giphy.com/media/pHb82xtBPfqEg/giphy.gif

*/

//  _____ _            _____           _               ___
// |_   _| |__   ___  | ____|_ __   __| |             |__ \
//   | | | '_ \ / _ \ |  _| | '_ \ / _` |               / /
//   | | | | | |  __/ | |___| | | | (_| |  _   _   _   |_|
//   |_| |_| |_|\___| |_____|_| |_|\__,_| (_) (_) (_)  (_)
