import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./Services/logger.service";

describe('calculator service', ()=> {
  it('should add two numbers', () => {
    const loggerService = new LoggerService()
    const calculator = new CalculatorService(loggerService);
    let result = calculator.add(2,2);
    expect(result).toBe(4)
  });

  it('should subtract two numbers', ()=> {
    const loggerService = new LoggerService();
    const calcultator = new CalculatorService(loggerService);
    let result = calcultator.subtract(4,2);
    expect(result).toBe(2)
  })
})
