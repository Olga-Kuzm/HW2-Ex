describe('Check app', function(){
    it('should login', async function(){
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({timeout : 15000, reverse : true});

    });
    it('should delete sticky element', async function(){
        const elem = await $$('header/*[class*=sticky]')[0];
        await browser.pause(1000);
        await browser.execute((el)=> {el.remove()}, elem);           
        await browser.pause(1000);       
        
    });
    it('should click on hidden button & accept alert', async function(){
        const button = await $$('button[onclick*=alert')[0];        
        await browser.execute("arguments[0].click()", button);
        await browser.pause(1000);               
        await browser.acceptAlert();
        await browser.pause(2000)
    })
})


