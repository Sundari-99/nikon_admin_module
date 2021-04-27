import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-one',
  templateUrl: './survey-one.component.html',
  styleUrls: ['./survey-one.component.scss']
})
export class SurveyOneComponent implements OnInit {

  public global_survey = [
    { id: "", survey: "Chinese", country: "China", date: "18-June-2021", surv_Editable: false},
    { id: "", survey: "Puyi", country: "China", date: "22-July-2021", surv_Editable: false}
  ];

  public isCheck:boolean;
  public toCheck = [];

  constructor() { }

  ngOnInit(): void {
    this.deleteToCheck();
  }

  onSurveyEditable(i) {
    this.global_survey[i].surv_Editable = !this.global_survey[i].surv_Editable;
  }

  deleteToCheck() {
    if(this.global_survey.length > 1) {
      this.isCheck = !this.isCheck;
    }
  }

  clickToEdit(i) {
    this.global_survey[i].surv_Editable = !this.global_survey[i].surv_Editable;
    this.toCheck[i] = !this.toCheck[i];
  }


}
