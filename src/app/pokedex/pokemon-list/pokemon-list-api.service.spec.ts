import { TestBed } from '@angular/core/testing';

import { PokemonListApiService } from './pokemon-list-api.service';

describe('PokemonListApiService', () => {
  let service: PokemonListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
