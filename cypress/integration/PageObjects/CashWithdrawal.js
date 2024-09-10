class CashWithdrawal{

    selectWithdrawals(){

        return cy.get('.sc-jwXWPX')
    }

    selectCashWithdrawals(){

        return cy.get('.sc-kpjZlD')
    }

    inputaccountNumber(){

        return cy.get('input[name="accountNumber"]')
    }

    selectaccountownerwithdrawer(){

        return cy.get('input[value="yes"]')
    }

    selectnonaccountownerwithdrawer(){

        return cy.get('input[value="no"]')
    }

    inputWithdrawerPhoneNumber(){

        return cy.get('input[name="phoneNumber"]')
    }

    clickCurrency(){

        return cy.get('.sc-hBYZlh').contains('Select Currency')
    }

    selectCurrency(){

        return cy.get('.sc-hMagqs')
    }

    clickWithdrawalType(){

        return cy.get('.sc-hBYZlh').contains('Select Deposit Type')
    }

    selectWithdrawalType(){

        return cy.get('.sc-hMagqs')
    }

    clickInstrumentType(){

        return cy.get('.sc-hBYZlh').contains('Select Deposit Type')
    }

    inputInstrumentNumber(){

        return cy.get('.sc-hMagqs')
    }
    
    inputTransactionAmount(){

        return cy.get('input[name="amount"]')
    }

    inputremark(){

        return cy.get('textarea[name="remark"]')
    }


    inputnarration(){

        return cy.get('textarea[name="narration"]')
    }

    transactionbreakDown(){

        return cy.get('.sc-ljhsyB')
    }

    postTransaction(){

        return cy.get('button').contains('Post Transaction')
    }

    selectlimitapproval(){

        return cy.get('a[href="/limit-approval"]')
    }

    selectwithdrawallimit(){

        return cy.get('a[href="/limit-approval/deposit"]')
    }

    approvebutton(){

        return cy.get('.sc-ijCkoE button').contains('Approve')
    }

    approvalremark(){

        return cy.get('div.sc-kdMjkB input')
    }

    proceedApproval(){

        return cy.get('button').contains('Proceed')
    }

}

export default CashWithdrawal