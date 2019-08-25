import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDescrComponent } from './quote-descr.component';

describe('QuoteDescrComponent', () => {
  let component: QuoteDescrComponent;
  let fixture: ComponentFixture<QuoteDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
