import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AquariusPage } from './aquarius.page';

describe('AquariusPage', () => {
  let component: AquariusPage;
  let fixture: ComponentFixture<AquariusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquariusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AquariusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
