import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./Services/logger.service";

describe('calculator service', ()=> {
  let mockLoggerService: any;
  let calculator: CalculatorService;

  beforeEach(()=> {
    console.log('calling before each');
    mockLoggerService = jasmine.createSpyObj('loggerService', ['log']);
    calculator = new CalculatorService(mockLoggerService);
  })
  it('should add two numbers', () => {
    console.log('calling add')
    // const loggerService = new LoggerService()
    let result = calculator.add(2,2);
    expect(result).toBe(4)
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  });

  it('should subtract two numbers', ()=> {
    console.log('calling subtract')
    // let mockLoggerService = jasmine.createSpyObj('loggerService', ['log'])
    const loggerService = new LoggerService();
    const calcultator = new CalculatorService(loggerService);
    let result = calcultator.subtract(2,2);
    expect(result).toBe(0)
    // expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  })
})
