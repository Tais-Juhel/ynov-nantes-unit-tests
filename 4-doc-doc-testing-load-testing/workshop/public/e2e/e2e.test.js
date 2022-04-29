Feature('Workshop 4');

Scenario('Test Workshop 4', ({ I }) => {
    
    I.amOnPage('http://localhost:5000/');

    I.fillField({css: '#newTODO'}, 'TODOTest');
    I.see('TODOTest'); //test e2e -> si la liste se met bien à jour

    let testName = await I.grabTextFrom('//td[@scope="row][@class="text-left"][1]');
    I.click('//button[@class="btn btn-online-success btn-sm"][1]');

    I.see(testName); //test e2e -> si le TODO est bien visible après avoir cliqué sur valider (dans la liste compléter)

});