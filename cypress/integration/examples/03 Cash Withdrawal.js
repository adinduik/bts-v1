import Loginpage from "../PageObjects/Loginpage"
import CashWithdrawal from "../PageObjects/CashWithdrawal"

Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error
    console.error('An uncaught exception occurred:', err);
  
    // Continue the test without failing
    return false;
  });




describe("Cash Withdrawal Test Suite", function(){

    before(()=>{
        // Import data from example.json file

        cy.fixture('example').then((data)=>{

            this.data = data
        })
    })


    it("Cash Withdrawal Within Teller Limit", ()=>{
        const loginpage = new Loginpage()
        const withdrawal = new CashWithdrawal()

        

        cy.tellerLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.tellerdetails[0]) // Validate Teller Name
        cy.tellerRolevalidation()
        withdrawal.selectDeposits().eq(1).click({force:true})
        withdrawal.selectCashDeposit().click()
        withdrawal.inputaccountNumber().type(this.data.accountNumber)
        cy.wait(1500)
        withdrawal.selectaccountownerdepositor().check()
        withdrawal.inputdepositorPhoneNumber().type(this.data.phoneNumber)
        withdrawal.clickCurrency().click()
        withdrawal.selectCurrency().contains(this.data.currency).click()
        withdrawal.clickDepositType().click()
        withdrawal.selectDepositType().contains(this.data.depositType).click()
        cy.getInstrumentDate(this.data.transactionDate)
        withdrawal.inputTransactionAmount().clear()
        withdrawal.inputTransactionAmount().type(this.data.belowlimittransactionAmount)
        withdrawal.inputremark().type(this.data.remark)
        withdrawal.inputnarration().type(this.data.narration)
        cy.transactionBreakdown(this.data.belowlimitamountbreakdown)
        cy.totalvalidation(this.data.belowlimittransactionAmount)
        withdrawal.postTransaction().click()
        cy.postingValidationbelowlimit()
      

        loginpage.logout().click()
        cy.wait(1000)
    })

    it("Cash Withdrawal Above Test Limit", ()=>{
        const loginpage = new Loginpage()
        const withdrawal = new CashWithdrawal()

        

        cy.tellerLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.tellerdetails[0]) // Validate Teller Name
        cy.tellerRolevalidation()
        withdrawal.selectWithdrawals().eq(1).click({force:true})
        withdrawal.selectCashWithdrawals().click()
        withdrawal.inputaccountNumber().type(this.data.accountNumber)
        cy.wait(1500)
        withdrawal.selectaccountownerwithdrawer().check()
        withdrawal.inputwithdrPhoneNumber().type(this.data.phoneNumber)
        withdrawal.clickCurrency().click()
        withdrawal.selectCurrency().contains(this.data.currency).click()
        withdrawal.clickWithdrawalType().click()
        withdrawal.selectWithdrawalType().contains(this.data.depositType[0]).click()
        withdrawal.clickInstrumentType().click()
        cy.instrumentType(this.data.instrumentType[0])
        cy.getInstrumentDate(this.data.transactionDate)
        withdrawal.inputInstrumentNumber().type(slipNumber)
        withdrawal.inputTransactionAmount().clear()
        withdrawal.inputTransactionAmount().type(this.data.abovelimittransactionAmount)
        withdrawal.inputremark().type(this.data.remark)
        withdrawal.inputnarration().type(this.data.narration)
        cy.transactionBreakdown(this.data.abovelimitamountbreakdown)
        cy.totalvalidation(this.data.abovelimittransactionAmount)
        withdrawal.postTransaction().click()
        cy.postingValidationabovelimit()
      

        loginpage.logout().click()
        cy.wait(1000)
    })


    it("Withdrawal Approval", ()=>{
        const loginpage = new Loginpage()
        const withdrawal = new CashWithdrawal()

        

        cy.approverLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.approverdetails[0]) // Validate Teller Name
        cy.approverRolevalidation()
        withdrawal.selectlimitapproval().click()
        withdrawal.selectwithdrawallimit().click()
        cy.wait(2000)
        cy.selectApprovalTransaction(this.data.abovelimittransactionAmount)
        
        withdrawal.approvebutton().click()
        withdrawal.approvalremark().type(this.data.transactionapprovalremark)
        withdrawal.proceedApproval().click()
        
      

        loginpage.logout().click()
        cy.wait(1000)
    })


    it("Withdrawal Decline", ()=>{
        const loginpage = new Loginpage()
        const withdrawal = new CashWithdrawal()

        cy.tellerLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.tellerdetails[0]) // Validate Teller Name
        cy.tellerRolevalidation()
        withdrawal.selectWithdrawals().eq(1).click({force:true})
        withdrawal.selectCashWithdrawals().click()
        withdrawal.inputaccountNumber().type(this.data.accountNumber)
        cy.wait(1500)
        withdrawal.selectaccountownerwithdrawer().check()
        withdrawal.inputwithdrPhoneNumber().type(this.data.phoneNumber)
        withdrawal.clickCurrency().click()
        withdrawal.selectCurrency().contains(this.data.currency).click()
        withdrawal.clickWithdrawalType().click()
        withdrawal.selectWithdrawalType().contains(this.data.depositType[0]).click()
        withdrawal.clickInstrumentType().click()
        cy.instrumentType(this.data.instrumentType[0])
        cy.getInstrumentDate(this.data.transactionDate)
        withdrawal.inputInstrumentNumber().type(slipNumber)
        withdrawal.inputTransactionAmount().clear()
        withdrawal.inputTransactionAmount().type(this.data.declineTransactionAmount)
        withdrawal.inputremark().type(this.data.remark)
        withdrawal.inputnarration().type(this.data.narration)
        cy.transactionBreakdown(this.data.declineAmountbreakdown)
        cy.totalvalidation(this.data.declineTransactionAmount)
        withdrawal.postTransaction().click()
        cy.postingValidationabovelimit()
      

        loginpage.logout().click()
        cy.wait(1000)

        

        cy.approverLogin()
        cy.wait(3000)
        cy.uservalidation(this.data.approverdetails[0]) // Validate Approver Name
        cy.approverRolevalidation()
        withdrawal.selectlimitapproval().click()
        withdrawal.selectwithdrawallimit().click()
        cy.wait(2000)
        cy.selectApprovalTransaction(this.data.declineTransactionAmount)
        
        withdrawal.declinebutton().click()
        withdrawal.approvalremark().type(this.data.transactionapprovalremark)
        withdrawal.proceedApproval().click()
        
      

        loginpage.logout().click()
        cy.wait(1000)
    })


})