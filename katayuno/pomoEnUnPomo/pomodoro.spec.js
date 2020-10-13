describe('Pomodor', () => {
  describe('Creation', () => {
    it('Default duration', () => {
      //Arrange
      const pomodoro = new pomodoro();
      const defaultDuration = 25;

      // Act
      const timeLeft = pomodoro.getTime();

      //Assert
      expect(timeLeft).toBe(defaultDuration)
    })
  })
})