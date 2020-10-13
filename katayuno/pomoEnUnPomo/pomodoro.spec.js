describe('Pomodoro', () => {
  describe('When created', () => {
    it('has the default duration', () => {
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
    
    it('has the default duration if declared negative', () => {
      
      const anyNegative = -5;
      const defaultDuration = 25;
      const pomodoro = new Pomodoro(anyNegative)

      const timeLeft = pomodoro.getTime()
      
      expect(timeLeft).toBe(defaultDuration);
    })
  })
})