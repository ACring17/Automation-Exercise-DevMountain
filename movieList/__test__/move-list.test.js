const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

let driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { deleteMovie } = require('../index/deleteMovie');

const { crossOffMovie } = require('../index/crossOffMovie')

const { revealMessage } = require('../index/revealMessage')

beforeEach(async() => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html');
});

afterAll(async() => {
    await driver.sleep(1000);
    await driver.quit();
});

it('should delete movie from the list', async() => {
    await deleteMovie(driver);
});

it('should crossoff movie to list', async() => {
    await crossOffMovie(driver);
});

it('should give user a notification about the movie added to the list', async() => {
    await revealMessage(driver);
});