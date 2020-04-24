import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChiroruChokoPage } from './chiroru-choko.page';

describe('ChiroruChokoPage', () => {
  let component: ChiroruChokoPage;
  let fixture: ComponentFixture<ChiroruChokoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiroruChokoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChiroruChokoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
