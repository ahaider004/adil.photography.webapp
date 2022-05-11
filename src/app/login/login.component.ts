import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    email!: string;
    password!: string;
    constructor(private authService: AuthService) { }
    
    ngOnInit() {
    }
    onSubmit(formData:any) {
        if (formData.valid) {
            console.log(formData.value);
            this.authService.login(
                formData.value.email, 
                formData.value.password
            );
        }
    }
}