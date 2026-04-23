import { TestBed } from '@angular/core/testing';

import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [TokenStorageService]
    });
  });

  afterEach(() => localStorage.clear());

  it('setTokens and getAccessToken/getRefreshToken', () => {
    const s = TestBed.inject(TokenStorageService);
    s.setTokens('a', 'r');
    expect(s.getAccessToken()).toBe('a');
    expect(s.getRefreshToken()).toBe('r');
  });

  it('clear removes both', () => {
    const s = TestBed.inject(TokenStorageService);
    s.setTokens('a', 'r');
    s.clear();
    expect(s.getAccessToken()).toBeNull();
    expect(s.getRefreshToken()).toBeNull();
  });
});
