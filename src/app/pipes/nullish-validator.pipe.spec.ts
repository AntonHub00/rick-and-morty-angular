import { NullishValidatorPipe } from './nullish-validator.pipe';

describe('NullishValidatorPipe', () => {
  it('create an instance', () => {
    const pipe = new NullishValidatorPipe();
    expect(pipe).toBeTruthy();
  });
});
