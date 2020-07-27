import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentAppPage } from './student-app.page';

describe('StudentAppPage', () => {
  let component: StudentAppPage;
  let fixture: ComponentFixture<StudentAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
