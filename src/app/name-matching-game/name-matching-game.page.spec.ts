import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NameMatchingGamePage } from './name-matching-game.page';

describe('NameMatchingGamePage', () => {
  let component: NameMatchingGamePage;
  let fixture: ComponentFixture<NameMatchingGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameMatchingGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NameMatchingGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
