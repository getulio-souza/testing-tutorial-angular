import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    })

    //create an instance of the logger service 
    service = TestBed.inject(LoggerService)
  })


  it('should not have any messages at starting', ()=> {
    let count = service.messages.length;
    expect(count).toBe(0)
  })

  it('should add the message when log is called', ()=> {
    service.log('message received!')
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
