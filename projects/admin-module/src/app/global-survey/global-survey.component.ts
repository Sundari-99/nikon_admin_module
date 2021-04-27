import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-survey',
  templateUrl: './global-survey.component.html',
  styleUrls: ['./global-survey.component.scss']
})
export class GlobalSurveyComponent implements OnInit {

  public global_survey = [
    { id: "", survey: "Master", country: "Global", date: "31-Mar-2021", surv_Editable: false, coun_Editable: false},
    { id: "", survey: "Global 1", country: "Global", date: "12-Apr-2021", surv_Editable: false, coun_Editable: false},
    { id: "", survey: "Global 2", country: "Global", date: "24-May-2021", surv_Editable: false, coun_Editable: false},
    { id: "", survey: "Chinese", country: "China", date: "18-June-2021", surv_Editable: false, coun_Editable: false},
    { id: "", survey: "Puyi", country: "China", date: "22-July-2021", surv_Editable: false, coun_Editable: false},
    { id: "", survey: "Canada French", country: "Canada", date: "07-Aug-2021", surv_Editable: false, coun_Editable: false},
    { id: "", survey: "Canada English", country: "Canada", date: "14-Sep-2021", surv_Editable: false, coun_Editable: false}
  ];

  public country = [
    "Global", "China", "Canada"
  ];

  public isCheck = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSurveyEditable(i) {
    this.global_survey[i].surv_Editable = !this.global_survey[i].surv_Editable;
  }

  onCountryEditable(i) {
    this.isCheck[i] = !this.isCheck[i];
    this.global_survey[i].coun_Editable = !this.global_survey[i].coun_Editable;
  }

  clickToEdit(i) {
    this.global_survey[i].surv_Editable = !this.global_survey[i].surv_Editable;
    this.isCheck[i] = !this.isCheck[i];
    this.global_survey[i].coun_Editable = !this.global_survey[i].coun_Editable;

  }
}
