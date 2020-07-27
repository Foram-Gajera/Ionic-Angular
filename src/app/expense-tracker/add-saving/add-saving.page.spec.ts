import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSavingPage } from './add-saving.page';

describe('AddSavingPage', () => {
  let component: AddSavingPage;
  let fixture: ComponentFixture<AddSavingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSavingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSavingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
