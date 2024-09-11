class IntrabankTransfer{

    selectTransfers(){

        return cy.get('.sc-jwXWPX')
    }

    selectIntrabankTransfer(){

        return cy.get('.sc-kpjZlD')
    }

    inputCustomerAccountNumber(){

        return cy.get('input[name="accountNumber"].eq[0]')
    }

    inputBeneficiaryAccountNumber(){

        return cy.get('input[value="accountNumber"].eq[1]')
    }

    clickCurrency(){

        return cy.get('.sc-hBYZlh').contains('Select Currency')
    }

    selectCurrency(){

        return cy.get('.sc-hMagqs')
    }

    inputTransactionAmount(){

        return cy.get('input[name="amount"]')
    }
  
    inputDepositorPhoneNumber(){

        return cy.get('input[name="phoneNumber"]')
    }

    inputremark(){

        return cy.get('textarea[name="remark"]')
    }


    inputnarration(){

        return cy.get('textarea[name="narration"]')
    }
    
    clickInstrumentType(){

        return cy.get('.sc-hBYZlh').contains('Select Deposit Type')
    }

    inputInstrumentNumber(){

        return cy.get('.sc-hMagqs')
    }
    
   
  
    postTransaction(){

        return cy.get('button').contains('Post Transaction')
    }

    selectlimitapproval(){

        return cy.get('a[href="/limit-approval"]')
    }

    selectTransferslimit(){

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

export default IntrabankTransfer