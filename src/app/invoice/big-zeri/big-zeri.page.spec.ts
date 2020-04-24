import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BigZeriPage } from './big-zeri.page';

describe('BigZeriPage', () => {
  let component: BigZeriPage;
  let fixture: ComponentFixture<BigZeriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigZeriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BigZeriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
