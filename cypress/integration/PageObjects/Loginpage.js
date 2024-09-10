class Loginpage{

    inputUsername(){

        return cy.get('input[name="username"]')
    }

    inputPassword(){

        return cy.get('input[name="password"]')
    }

    inputUserToken(){

        return cy.get('input[name="token"]')
    }

    passwordeye(){

        return cy.get('div.sc-lkRDuz svg').eq(0)
    }

    loginsubmit(){

        return cy.get('button.sc-IFHok')
    }

    logout(){

        return cy.get('.sc-kRYBTm')
    }

}

export default Loginpage