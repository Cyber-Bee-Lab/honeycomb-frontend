import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeCadastroComponent } from './tela-de-cadastro.component';

describe('TelaDeCadastroComponent', () => {
  let component: TelaDeCadastroComponent;
  let fixture: ComponentFixture<TelaDeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaDeCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
