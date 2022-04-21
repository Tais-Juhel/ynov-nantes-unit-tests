Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', ({ I }) => {
    I.amOnPage('https://www.ynov-nantes.com/');

    I.click({css: '.cta'});
    I.waitUrlEquals('https://www.ynov-nantes.com/recherche');

    I.fillField({css: '.searchfield'}, 'info');
    I.wait(5);

    I.see('Bachelor Informatique');
});
