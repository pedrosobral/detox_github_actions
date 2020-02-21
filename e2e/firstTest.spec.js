describe('Example', () => {
  // beforeEach(async () => {
  //   console.log('\n\n\n\n\nBEFORE enable sync');
  //   // await device.enableSynchronization();
  //   console.log('\n\n\n\n\nAFTER enable sync');
  //   console.log('\n\n\n\n\nBEFORE reload');
  //   // await device.reloadReactNative();
  //   console.log('\n\n\n\n\nAFTER RELOAD');
  //   // console.log('\n\n\n\n\nBEFORE SINC');
  //   // await device.enableSynchronization();
  //   // console.log('\n\n\n\n\nAFTER SINC');
  // });

  it('should have welcome screen', async () => {
    await expect(element(by.label('Step One'))).toBeVisible();
  });
});
