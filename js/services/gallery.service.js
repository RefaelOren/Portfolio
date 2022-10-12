'use strict';

const projectsNum = 6;

var gProj = [
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Game',
        phrase: 'The classic game, clear all the mines',
        desc: 'The classic game, clear all the mines and flag them. Open clear cells and win the game! Complex work with Java Script and a lot of cool features.',
        url: 'img/portfolio/minesweeper.png',
        publishAt: 1448693940000,
        labels: ['Matrix', 'Keybord events'],
        link: 'https://refaeloren.github.io/Minesweeper/',
    },
    {
        id: 'book-shop',
        name: 'Book-shop',
        title: 'Application',
        desc: 'Book shop site, user can add books, price them, rate and delete. Each book have a read modal whit more info and option to rate the book. Also there are various types of filtering and two ways of displaying.',
        phrase: 'Book shop site',
        url: 'img/portfolio/book-shop.png',
        publishAt: 1448528940000,
        labels: ['Matrix', 'Keybord events'],
        link: 'https://refaeloren.github.io/Book-shop/',
    },
    {
        id: 'game-of-thrones-quiz',
        name: 'Quiz',
        title: 'Game - quiz',
        desc: 'Quiz with pictures and sound affects. Show how good you know game of thrones, answer all the questions to become the quiz lord',
        phrase: 'Show how good you know game of thrones',
        url: 'img/portfolio/game-of-thrones-quiz.png',
        publishAt: 1448625890000,
        labels: ['Matrix', 'Keybord events'],
        link: 'https://refaeloren.github.io/Game-of-thrones-quizz/',
    },
    {
        id: 'game-of-life',
        name: 'Game of life',
        title: 'Simulation',
        desc: "The classic game of life, generation after generation,show's us the complexity of life. ",
        phrase: 'The classic game of life',
        url: 'img/portfolio/game-of-life.png',
        publishAt: 1444563940000,
        labels: ['Matrix', 'Keybord events'],
        link: 'https://refaeloren.github.io/Game-of-life/',
    },
    {
        id: 'todo-list',
        name: 'Todo-list',
        title: 'Application',
        desc: 'A great app that take care of all your tasks, filtering and sorting them in various ways, priority warnings and it all will be there next time for you.',
        phrase: 'A great app that take care of all your tasks',
        url: 'img/portfolio/todo-list.png',
        publishAt: 1442973940000,
        labels: ['Matrix', 'Keybord events'],
        link: 'https://refaeloren.github.io/Todo-list/',
    },
    {
        id: 'safe-content',
        name: 'Safe-content',
        title: 'Validation App',
        desc: 'This site will not let you in unless you know the password. If you are the admin there are a page for you with info and various ways of filtering and sorting users. ',
        phrase: 'Protect your content',
        url: 'img/portfolio/safe-content.png',
        publishAt: 1448233940000,
        labels: ['Matrix', 'Keybord events'],
        link: 'https://refaeloren.github.io/Safe-content',
    },
];

function getProjForDisplay() {
    return gProj;
}

function getProjById(id) {
    console.log(id);
    return gProj.find((proj) => proj.id === id);
}
