import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularImportsModule} from '../../angular-imports/angular-imports.module';
import { RouterModule,Router } from '@angular/router';
import { PieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: PieComponent;
  let fixture: ComponentFixture<PieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [AngularImportsModule,RouterModule],
      declarations: [ PieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
