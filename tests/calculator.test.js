import { clear, backspace, calculate } from '../src/components/Calculator.jsx';
import { describe, it, expect } from 'vitest';


describe('Calculator Logic', () => {
  it.each([
    ['1+1', '2'],
    ['5-3', '2'],
    ['2*4', '8'],
    ['10/2', '5'],
  ])('should calculate %s correctly', (input, expected) => {
    const result = calculate(input);
    expect(result).toBe(expected);
  });

  it('should clear the result', () => {
    expect(clear("12")).toBe("");
  });

  it('should handle backspace correctly', () => {
    expect(backspace("123")).toBe("12");
  });

  it.each([
    ['2++2', 'Error'],
    ['5/', 'Error'],
    ['/3', 'Error'],
    ['abc', 'Error'],
  ])('should return "Error" for invalid input %s', (input) => {
    const result = calculate(input);
    expect(result).toBe("Error");
  });

  it.each([
    ['2.5+3.5', '6'],
    ['-5+8', '3'],
    ['-2*-3', '6'],
    ['-10/-2', '5'],
  ])('should handle decimal and negative numbers correctly', (input, expected) => {
    const result = calculate(input);
    expect(result).toBe(expected);
  });

  it('should handle complex calculations with correct order of operations', () => {
    expect(calculate('2+3*4')).toBe('14');
    expect(calculate('(2+3)*4')).toBe('20');
  });

  it('should handle division by zero', () => {
    expect(calculate('5/0')).toBe('Infinity');
  });
});

