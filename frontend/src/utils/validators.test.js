import { isEmail } from './validators';

test('validates email addresses correctly', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('invalid-email')).toBe(false);
});