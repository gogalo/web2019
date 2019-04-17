import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularImportsModule} from '../../../angular-imports/angular-imports.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [AngularImportsModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterTestingModule,BrowserAnimationsModule],
      declarations: [ LoginComponent],
	  providers:[LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
