import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AngularImportsModule} from '../../angular-imports/angular-imports.module';
import { LoginService } from './login.service';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
	  imports: [HttpClientModule,AngularImportsModule,FormsModule,ReactiveFormsModule],
      declarations: [ LoginComponent],
	  providers: [LoginService,HttpClient ]
    }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
