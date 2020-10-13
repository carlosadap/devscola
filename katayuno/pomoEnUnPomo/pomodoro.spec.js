describe('Pomodoro', () => {
  describe('When created', () => {
    it('has a default duration', () => {
      //Arrange
      const pomodoro = new Pomodoro();
      const defaultDuration = 25;

      // Act
      const timeLeft = pomodoro.getTime();
      
      //Assert
      expect(timeLeft).toBe(defaultDuration);
    })
    
    it('could have any duration', () => {
      
      const anyDuration = 45;
      const pomodoro = new Pomodoro(anyDuration);
      
      const timeLeft = pomodoro.getTime();
      
      expect(timeLeft).toBe(anyDuration);
    })

  })
})