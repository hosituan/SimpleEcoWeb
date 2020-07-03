import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public userName = '';
  public password = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  login = () => {
    this.authenticationService.login(this.userName, this.password).subscribe(
      (data) => {
        if (data!= null ) {
          localStorage.setItem('username', data.username);
          localStorage.setItem('password', data.password);
          console.log('login Success');


          
          this.router.navigate(['/product/add']);
        } else {
          console.log('login fail');
        }
      },  
      (err) => console.error(err)
    ) ;    
  };
  ngOnInit(): void {
  }

}
