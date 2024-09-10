// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//
 Cypress.Commands.add('pagetitle', () => {cy.get('p.sc-eCyba').then(($text)=>{

            expect($text.text()).to.eq(' Welcome to Slipfree-V2!')
        })
    })


Cypress.Commands.add('tellerLogin', () => {
    cy.visit('https://btstestv1.com')
    cy.get('input[name="username"]').type('Teller.User@btstest.com')
    cy.get('input[name="password"]').type('password1')
    cy.get('input[name="token"]').type('101010')
    cy.get('button.sc-IFHok').click()
    
})

Cypress.Commands.add('approverLogin', () => {
    cy.visit('https://btstestv1.com')
    cy.get('input[name="username"]').type('Approver.User@btstest.com')
    cy.get('input[name="password"]').type('password2')
    cy.get('input[name="token"]').type('101010')
    cy.get('button.sc-IFHok').click()
    
})

Cypress.Commands.add('adminLogin', () => {
    cy.visit('https://btstestv1.com')
    cy.get('input[name="username"]').type('Admin.User@btstest.com')
    cy.get('input[name="password"]').type('password3')
    cy.get('input[name="token"]').type('101010')
    cy.get('button.sc-IFHok').click()
    
})

Cypress.Commands.add('uservalidation', (username) => {
        var userfirstname = username.split(".")
        var userfirstname1 = userfirstname[0]

        var userlastname = userfirstname[1].split("@")
        var userlastname1 = userlastname[0]


    cy.get('.sc-lnDKux').then(($logintext)=>{
        expect($logintext.text()).to.eq('Welcome, '+ userfirstname1 + ' ' + userlastname1)
       

    })
    
})

Cypress.Commands.add('tellerRolevalidation', () => {
    
    cy.get('.sc-kbdFaq').then(($role)=>{
        expect($role.text()).to.include('Teller')
    })

    })



Cypress.Commands.add('approverRolevalidation', () => {
    
    cy.get('.sc-kbdFaq').then(($role)=>{
            expect($role.text()).to.include('HOP')
        })
    
       })
    


Cypress.Commands.add('adminRolevalidation', () => {
    
    cy.get('.sc-kbdFaq').then(($role)=>{
                expect($role.text()).to.include('OpsSystemControl')
            })
        
})
           



Cypress.Commands.add('getInstrumentDate', (instrumentDate) => {
            var instrumentDate = instrumentDate.split('\\')
            var instrumentyear = instrumentDate[0]
    
            var instmonth = instrumentDate[1]
           
            var instrumentDay = instrumentDate[2]

    
            cy.get('.sc-eeZoXJ').click()
            for(var i=0; i<2; i++){
            cy.get('.react-calendar__navigation__label').click()
            }
            cy.get('.react-calendar__decade-view__years__year').then(($decade)=>{
    
                const decadetext = $decade.first().text()
                var decade = parseInt(decadetext.substring(0, 4))
    
                while(Number(instrumentyear)<decade){
                    cy.get('.react-calendar__navigation__prev-button').click()
                    decade-=10
                }
            })
            cy.get('.react-calendar__decade-view__years__year').contains(instrumentyear).click()
            cy.get('.react-calendar__year-view__months__month').contains(instmonth).click()
            cy.contains('abbr', instrumentDay).click()
           
    
})

Cypress.Commands.add('transactionBreakdown', (tranbreakdown) => {
    
    cy.get('.sc-ljhsyB').each(($el, index, $list)=>{

        var denomination = $el.find('p.sc-eKxxib').text()

        if(denomination==='1000'){

            cy.get('div div input.sc-fxbaO').eq(index).type(tranbreakdown[0])
        }

        else if (denomination==='500'){

            cy.get('div div input.sc-fxbaO').eq(index).type(tranbreakdown[1])
        }

        else if (denomination==='200'){

            cy.get('div div input.sc-fxbaO').eq(index).type(tranbreakdown[2])
        }

        else if (denomination==='100'){

            cy.get('div div input.sc-fxbaO').eq(index).type(tranbreakdown[3])
        }

        else if (denomination==='50'){

            cy.get('div div input.sc-fxbaO').eq(index).type(tranbreakdown[4])
        }

        else if (denomination==='20'){

            cy.get('div div input.sc-fxbaO').eq(index).type(tranbreakdown[5])
        }

        else if (denomination==='10'){

            cy.get('div div input.sc-fxbaO').eq(index).type(tranbreakdown[6])
        }

        else if (denomination==='5'){

            cy.get('div div input.sc-fxbaO').eq(index).type(tranbreakdown[7])
        }
        
    })
        
})

Cypress.Commands.add('totalvalidation', (newtotal) => {
    
    cy.get('div.sc-whCvt div.sc-mIVWJ .sc-eKxxib').then(($total)=>{

        const totaltext = $total.first().text()
        var sumtotaltext = totaltext.split(" ")
        var sumtotaltext = sumtotaltext[1].trim()
        var total = parseInt(sumtotaltext)

        expect(total).to.equal(Number(newtotal))


    })
        
})

Cypress.Commands.add('postingValidationbelowlimit', () => {
    
    cy.get('div p').each(($confirmationtext, index, $list)=>{

        if($confirmationtext.text().includes('I have read through all details displayed above and have ensured the information is accurate.')){

            cy.get('section div input[type="radio"]').click()
            cy.get('div.sc-jZSfwv button').click()
            cy.wait(2000)
        }
    })
        
})

Cypress.Commands.add('postingValidationabovelimit', () => {
    
    cy.get('div p').each(($confirmationtext, index, $list)=>{

        if($confirmationtext.text().includes('I have read through all details displayed above and have ensured the information is accurate.')){

            cy.get('section div input[type="radio"]').click()
            cy.get('div.sc-jZSfwv button').click()
            cy.wait(2000)
            cy.get('div.sc-dMGEXm div p').eq(1).should('have.text', 'Transaction sent for approval')
            cy.get('.sc-dzwvnd svg').click()
        }
    })
        
})


Cypress.Commands.add('selectApprovalTransaction', ($approvalamount) => {
    
    cy.get('tr td.sc-hJwLUj:nth-child(3)').each(($el, index, $list)=>{

        const approvalamounttext = $el.text()
        var apprAmount = approvalamounttext.replace(/,/g, '') 
                                            .replace(/NGN\s*/, ''); 
        var approvalAmount = parseInt(apprAmount, 10)
        

        if(approvalAmount===Number($approvalamount)){

            cy.get('button.sc-IFHok').eq(index).click({force:true})
        }


})
        
})

Cypress.Commands.add('instrumentType', (instType) => {
    
    cy.get('.sc-ljhsyB').each(($el, index, $list)=>{

        var instrumentType = $el.text()

        if(instrumentType===instType){

            cy.wrap($el).click()
        }
               
    })
        
})
        
    


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })