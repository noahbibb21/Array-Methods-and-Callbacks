import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// (a)
fifaData.forEach((game) => {
    return game.Stage === "Final" && game.Year === 2014
      ? console.log(game["Home Team Name"])
      : null;
  });
  // (b)
  fifaData.forEach((game) => {
    return game.Stage === "Final" && game.Year === 2014
      ? console.log(game["Away Team Name"])
      : null;
  });
  // (c)
  fifaData.forEach((game) => {
    return game.Stage === "Final" && game.Year === 2014
      ? console.log(game["Home Team Goals"])
      : null;
  });
  // (d)
  fifaData.forEach((game) => {
    return game.Stage === "Final" && game.Year === 2014
      ? console.log(game["Away Team Goals"])
      : null;
  });
  // (e)
  fifaData.forEach((game) => {
    return game.Stage === "Final" &&
      game.Year === 2014 &&
      game["Home Team Goals"] > game["Away Team Goals"]
      ? console.log(game["Home Team Name"])
      : game.Stage === "Final" &&
        game.Year === 2014 &&
        game["Home Team Goals"] < game["Away Team Goals"]
      ? console.log(game["Away Team Name"])
      : null;
  });


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finalsArray = [];
   data.forEach((game) => {
       if (game.Stage === "Final") {
           finalsArray.push(game);
    }
   });
    return finalsArray;

    console.log(getFinals(fifaData));
}

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = [];
    callback.forEach((game) => {
      years.push(game.Year);
    });
    return years;
  }
  
  console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = [];
  
    callback.forEach((game) => {
      winners.push(
        game["Home Team Goals"] > game["Away Team Goals"]
          ? game["Home Team Name"]
          : game["Away Team Name"]
      );
    });
  
    return winners;
  }
  
  console.log(getWinners(getFinals(fifaData)));
  



/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winsCallback, yearsCallback) {
    let strArr = [];
    let count = -1;
  
    yearsCallback.forEach((year) => {
      count++;
      strArr.push(`In ${year}, ${winsCallback[count]} won the world cup!`);
    });
  
    return strArr;
  }
  
  console.log(
    getWinnersByYear(
      getWinners(getFinals(fifaData)),
      getYears(getFinals(fifaData))
    )
  );
  
/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    let wins = 0;
  
    data.forEach((game) => {
      if (
        game.Stage === "Final" &&
        game["Home Team Initials"] === teamInitials &&
        game["Home Team Goals"] > game["Away Team Goals"]
      ) {
        wins++;
      } else if (
        game.Stage === "Final" &&
        game["Away Team Initials"] === teamInitials &&
        game["Home Team Goals"] < game["Away Team Goals"]
      ) {
        wins++;
      }
    });
  
    return wins;
  }
  
  console.log(getCountryWins(fifaData, "FRG"));

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeTeamGoals = data.map(function(item){
        return item["Home Team Goals"]
    })
    let awayTeamGoals = data.map(function(item){
        return item["Away Team Goals"]
    })

    let avgHomeGoals = homeTeamGoals.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    }, 0) / homeTeamGoals.length

    let avgAwayGoals = awayTeamGoals.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    }, 0) / awayTeamGoals.length

    console.log(`Home Team Average: ${avgHomeGoals.toFixed(2)}, Away Team Average: ${avgAwayGoals.toFixed(2)}`)

};

getAverageGoals(fifaData);


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
