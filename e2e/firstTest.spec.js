describe('Example', () => {
  beforeEach(async () => {
    console.log('\n\n\n\n\nBEFORE launch');
    await device.launchApp();
    console.log('\n\n\n\n\nAFTER lauch');
  });

  it('should have welcome screen', async () => {
    await expect(element(by.label('Step One'))).toBeVisible();
  });
});
