import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css',

    '../../../src/assets/css/templatemo-training-studio.css'


  ]
})
export class HomePageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private enquiry: HeroService,
    private router: Router,
    private http: HttpClient

  ) { }

  enquiryForm = {

    name: '',
    email: '',
    subject: '',
    message: ''
  }

  newenquiryForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]

    })


  newEnquiry() {


    this.enquiry.newEnquiry(this.enquiryForm)
      .subscribe(
        response => {
          if (response) {
            Swal.fire("Successfully Added", "", "success")
              .then(() => {
                this.router.navigate(['']);
              })
          }
          else {
            console.log("Network Error")
            Swal.fire("Network Error", "Please do after sometime ", "error")
              .then(() => {
                this.router.navigate(['/corporate-membership']);
              })

          }
        })
  }


  ngOnInit(): void {
  }

}
