import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockElement = document.createElement('div');
    const directive = new HighlightDirective(new ElementRef(mockElement));
    expect(directive).toBeTruthy();
  });
});
