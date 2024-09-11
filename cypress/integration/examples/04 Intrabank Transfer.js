import Loginpage from "../PageObjects/Loginpage"
import IntrabankTransfer from "../PageObjects/IntrabankTransfer"

Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error
    console.error('An uncaught exception occurred:', err);
  
    // Continue the test without failing
    return false;
  });




describe("Intrabank Transfer Test Suite", function(){

    before(()=>{
        // Import data from example.json file

        cy.fixture('example').then((data)=>{

            this.data = data
        })
    })


    it("Intrabank Transfer", ()=>{
        const loginpage = new Loginpage()
        const intrabank = new IntrabankTransfer()

        

        cy.tellerLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.tellerdetails[0]) // Validate Teller Name
        cy.tellerRolevalidation()
        intrabank.selectTransfers().eq(1).click({force:true})
        intrabank.selectIntrabankTransfer().click()
        withdrawal.inputaccountNumber().type(this.data.accountNumber)
        cy.wait(1500)
        intrabank.selectaccountownerdepositor().check()
        intrabank.inputdepositorPhoneNumber().type(this.data.phoneNumber)
        intrabank.clickCurrency().click()
        intrabank.selectCurrency().contains(this.data.currency).click()
        intrabank.clickWithdrawalType().click()
        intrabank.selectWithdrawalType().contains(this.data.depositType[0]).click()
        intrabank.clickInstrumentType().click()
        cy.instrumentType(this.data.instrumentType[0])
        cy.getInstrumentDate(this.data.transactionDate)
        intrabank.inputInstrumentNumber().type(slipNumber)
        intrabank.inputTransactionAmount().clear()
        intrabank.inputTransactionAmount().type(this.data.abovelimittransactionAmount)
        intrabank.inputremark().type(this.data.remark)
        intrabank.inputnarration().type(this.data.narration)
        cy.transactionBreakdown(this.data.abovelimitamountbreakdown)
        cy.totalvalidation(this.data.abovelimittransactionAmount)
        intrabank.postTransaction().click()
        cy.postingValidationabovelimit()
      

        loginpage.logout().click()
        cy.wait(1000)
    })


    it("Withdrawal Approval", ()=>{
        const loginpage = new Loginpage()
        const intrabank = new IntrabankTransfer()

        

        cy.approverLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.approverdetails[0]) // Validate Teller Name
        cy.approverRolevalidation()
        intrabank.selectlimitapproval().click()
        intrabank.selecttransferlimit().click()
        cy.wait(2000)
        cy.selectApprovalTransaction(this.data.abovelimittransactionAmount)
        
        intrabank.approvebutton().click()
        intrabank.approvalremark().type(this.data.transactionapprovalremark)
        intrabank.proceedApproval().click()
        
      

        loginpage.logout().click()
        cy.wait(1000)
    })


    it("Intrabank Transfer Decline", ()=>{
        const loginpage = new Loginpage()
        const intrabank = new IntrabankTransfer()

        cy.tellerLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.tellerdetails[0]) // Validate Teller Name
        cy.tellerRolevalidation()
        intrabank.selectDeposits().eq(1).click({force:true})
        intrabank.selectCashDeposit().click()
        intrabank.inputaccountNumber().type(this.data.accountNumber)
        cy.wait(1500)
        intrabank.selectaccountownerdepositor().check()
        intrabank.inputdepositorPhoneNumber().type(this.data.phoneNumber)
        intrabank.clickCurrency().click()
        intrabank.selectCurrency().contains(this.data.currency).click()
        intrabank.clickDepositType().click()
        intrabank.selectDepositType().contains(this.data.depositType).click()
        cy.getInstrumentDate(this.data.transactionDate)
        intrabank.inputTransactionAmount().clear()
        intrabank.inputTransactionAmount().type(this.data.declineTransactionAmount)
        intrabank.inputremark().type(this.data.remark)
        intrabank.inputnarration().type(this.data.narration)
        cy.transactionBreakdown(this.data.declineAmountbreakdown)
        cy.totalvalidation(this.data.declineTransactionAmount)
        intrabank.postTransaction().click()
        cy.postingValidationabovelimit()
      

        loginpage.logout().click()
        cy.wait(1000)

        

        cy.approverLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.approverdetails[0]) // Validate Approver Name
        cy.approverRolevalidation()
        intrabank.selectlimitapproval().click()
        intrabank.selectdepositlimit().click()
        cy.wait(2000)
        cy.selectApprovalTransaction(this.data.declineTransactionAmount)
        
        intrabank.approvebutton().click()
        intrabank.approvalremark().type(this.data.transactionapprovalremark)
        intrabank.proceedApproval().click()
        
      

        loginpage.logout().click()
        cy.wait(1000)
    })


})