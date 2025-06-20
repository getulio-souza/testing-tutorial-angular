import { StengthPipe } from './stength.pipe';
describe('StengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StengthPipe();
    expect(pipe).toBeTruthy();
  });
  it('should display weak if 5 value is passed', ()=> {
    const pipe = new StengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)')
  })
});
