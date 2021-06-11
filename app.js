var friendArr = ["Josh", "Christopher", "Jake", "Will", "Brad"];
var locationArr = [
  "bed","bathroom","kitchen","church","library",
  "spaceship","gym","cave","paper box","dragons lair",
  "middle of the street",
];
var weaponArr = [
  "jelly fish","cow","ray gun","wet noodle","pineapple",
  "truck","chicken","hand cannon","shark","dubstep gun",
  "batarang","nerf gun","unicorn gun","judy chop","knife",
  "golf club","mouse","dino nugget","toothpick","spell",
];

var h1 = $(
  `<h1>Context <span class="fire">c</span><span class="burn">l</span><span class="burn">u</span><span class="fire">e</span><span class="fire">s</span></h1>`
);
$("body").append(h1);

for (i = 1; i <= 100; i++) {
  createH3(i);
}

function createH3(i) {
  var h3 = $(`<button id="${i}">Accusation ${i} </#button>`);
  $("body").append(h3);
  $(h3).click(function () {
    alert(
      `I accuse ${friendArr[i % friendArr.length]} with the ${
        weaponArr[i % weaponArr.length]
      } in the ${locationArr[i % locationArr.length]}!`
    );
  });
};
