import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularImportsModule} from '../../angular-imports/angular-imports.module';
import { RouterModule } from '@angular/router';
 import { RouterTestingModule } from '@angular/router/testing';
import { CabeceraComponent } from './cabecera.component';

describe('CabeceraComponent', () => {
  let component: CabeceraComponent;
  let fixture: ComponentFixture<CabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [AngularImportsModule,RouterModule,RouterTestingModule],
      declarations: [ CabeceraComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
