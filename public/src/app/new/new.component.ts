import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { CompilePipeMetadata } from '@angular/compiler';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newAuthor: any = { name: "" }
  newError: string;
  showError: boolean;
  errors: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("This is the submit data from new.component", this.newAuthor)
    let observablepost = this._httpService.addAuthors(this.newAuthor);
    observablepost.subscribe((data: any) => {
      console.log("Got our out postdata!", data);
      // console.log("This is the post data from app.components for newTask", this.newAuthor);

      if (data.err) {
        console.log("this was an error", data);
        this.errors = data.errors;
      }
      else {
        this._router.navigate(['/']);
        this.newAuthor = {
          name: ""
        }
      }
    });
  }

}
