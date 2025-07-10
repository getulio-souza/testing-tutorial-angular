import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  it('should not have any messages at starting', ()=> {
    const loggerService = new LoggerService();
    let count = loggerService.messages.length;
    expect(count).toBe(0)
  })

  it('should add the message when log is called', ()=> {
    const service = new LoggerService();
    service.log('message received!')
  })

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(LoggerService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
