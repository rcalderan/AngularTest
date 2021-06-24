import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrrComponent } from './mirrr.component';

describe('MirrrComponent', () => {
  let component: MirrrComponent;
  let fixture: ComponentFixture<MirrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirrrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
