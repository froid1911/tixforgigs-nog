describe("test", () => {
  it("should load website", () => {
    cy.visit("https://www.tixforgigs.com/de-DE/Event/42028");
    cy.get(".sold-out > span").should("have.length", 3);
  });
});
