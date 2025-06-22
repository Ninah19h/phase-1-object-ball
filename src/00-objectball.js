function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        }
      }
    }
  };
}

function numPointsScored(playerName) {
  const game = gameObject();
  for (let gameKey in game) {
    let team = game[gameKey];
    let players = team.players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
}



function shoeSize(playerName) {
  const game = gameObject();
  for (let gameKey in game) {
    const players = game[gameKey].players;
    if (players[playerName]) {
      debugger; // Pause 
      return players[playerName].shoe;
    }
  }
}


function teamColors(teamName) {
  const game = gameObject();
  for (let gameKey in game) {
    const team = game[gameKey];
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}


function teamNames() {
  const game = gameObject();
  let names = [];
  for (let gameKey in game) {
    names.push(game[gameKey].teamName);
  }
  return names;
}


function playerNumbers(teamName) {
  const game = gameObject();
  let numbers = [];
  for (let gameKey in game) {
    const team = game[gameKey];
    if (team.teamName === teamName) {
      for (let player in team.players) {
        numbers.push(team.players[player].number);
      }
    }
  }
  return numbers;
}


console.log(numPointsScored("Jason Terry"));            

console.log(shoeSize("Ben Gordon"));                    

console.log(teamColors("Brooklyn Nets"));               

console.log(teamColors("Charlotte Hornets"));           

console.log(teamNames());                               

console.log(playerNumbers("Brooklyn Nets"));            

console.log(playerNumbers("Charlotte Hornets"));        

function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let gameKey in game) {
    const team = game[gameKey];
    const players = team.players;

    for (let player in players) {
      const playerStats = players[player];
      if (playerStats.points > maxPoints) {
        maxPoints = playerStats.points;
        topPlayer = player;
      }
    }
  }

  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  let homeTotal = 0;
  let awayTotal = 0;

  for (let player in game.home.players) {
    homeTotal += game.home.players[player].points;
  }

  for (let player in game.away.players) {
    awayTotal += game.away.players[player].points;
  }

  if (homeTotal > awayTotal) {
    return game.home.teamName;
  } else {
    return game.away.teamName;
  }
}

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (let gameKey in game) {
    const team = game[gameKey];
    const players = team.players;

    for (let player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}


function doesLongNameStealATon() {
  const game = gameObject();
  const longestName = playerWithLongestName();

  let maxSteals = 0;
  let playerWithMostSteals = "";

  for (let gameKey in game) {
    const team = game[gameKey];
    const players = team.players;

    for (let player in players) {
      const steals = players[player].steals;
      if (steals > maxSteals) {
        maxSteals = steals;
        playerWithMostSteals = player;
      }
    }
  }

  return playerWithMostSteals === longestName;
}


console.log("Most points scored by:", mostPointsScored());
console.log("Winning team:", winningTeam());
console.log("Player with longest name:", playerWithLongestName());
console.log("Does long name steal a ton?", doesLongNameStealATon());

