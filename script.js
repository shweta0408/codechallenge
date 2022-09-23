"use strict";

//coding challenge

const game = {
  team1: "Bayern Munich",
  team2: "Borrusia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretza",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],

    [
      "Burki",
      "schulz",
      "Hummels",
      "Akanji",
      "hakimi",
      "Weigl",
      "witsel",
      "Hazard",
      "Brandt",
      "Ebby",
      "sancho",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Sept 23rd 2022",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutingo", "Periscic"];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals("Davis", "Muller", "Lewandowski", "Kimich");
printGoals("Davis", "Muller");
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
