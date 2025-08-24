describe('Student Details Form',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:5173/student-details')
    })
    it('should display the student form correctly', () => {
        cy.get('h2').should('contain','Student Details')
        cy.get('input[name="name"]').should('be.visible')
        cy.get('input[name="rollNo"]').should('be.visible')
        cy.get('input[name="department"]').should('be.visible')
        cy.get('input[name="year"]').should('be.visible')
        cy.get('input[name="email"]').should('be.visible')
        cy.get('button[type="submit"]').should('be.visible')
    })
    it('should fill  and submit the form',() => {
        cy.get('input[name="name"]').type('leodas2')
        cy.get('input[name="rollNo"]').type('cs003')
        cy.get('input[name="department"]').type('computer science')
        cy.get('input[name="year"]').type('2 year')
        cy.get('input[name="email"]').type('leodas5@example.com')
        cy.wait(2000)
        cy.get('button[type="submit"]').click()
        cy.wait(3000)
        cy.url().should('include', '/student-details')
        cy.get('h2').should('contain','Student Details')

        cy.get('input[name="name"]').should('have.value', '')
    })
})