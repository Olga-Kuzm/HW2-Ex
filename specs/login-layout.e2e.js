
describe('Explicit wait & layout check', function(){
    it('should log in', async function(){
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();        
        await $('#spinner').waitForDisplayed({timeout : 15000, reverse : true});
        const title = await browser.getTitle();
        if (title !== 'Report portal') {
            throw new Error('You don`t login into system!!!')
        }   

    });

    it('should login with correct login', async function(){
        const user = await $('#user-label');
        const userName = await user.getText();
        if(userName !== "John Walker"){
            throw new Error (`User is not correct`)
        }

    });

    it('should not be red', async function(){
        const menu = await $$('#first-nav-block>*');       
        for (const item of menu) {                        
            item.moveTo(); 
            await browser.pause(1000);           
            const color = await $(item).getCSSProperty('background-color');
            
            if(color.value === 'rgba(255,0,0,1)'){
                const text = await item.getText()
                throw new Error (`Menu item ${text} has wrong color`)
            };            
        }          
    }) 
})
    


