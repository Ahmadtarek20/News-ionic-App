import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsSimglePage } from './news-simgle.page';

describe('NewsSimglePage', () => {
  let component: NewsSimglePage;
  let fixture: ComponentFixture<NewsSimglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSimglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSimglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
