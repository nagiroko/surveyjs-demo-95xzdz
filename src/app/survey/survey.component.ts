import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { log } from "util";
// import * as Survey from "survey-angular";
declare var Survey: any;
declare var showdown: any;

@Component({
  selector: "survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  json: object;
  result: any;

  constructor() {}

  ngOnInit() {
    //Applying style theme
    Survey.StylesManager.applyTheme("modern");

    //Creating a survey model
    const survey = new Survey.Model(this.json);
    //Create showdown mardown converter
    var converter = new showdown.Converter();

    survey.onTextMarkdown.add(function(survey, options) {
      //convert the mardown text to html
      var str = converter.makeHtml(options.text);
      //remove root paragraphs <p></p>
      str = str.substring(3);
      str = str.substring(0, str.length - 4);
      //set html
      options.html = str;
    });
    
    //Saving the survey response
    survey.onComplete.add((result, options) => {
      this.submitSurvey.emit(result.data);
      this.result = result.data;
    });
  survey.onMatrixAfterCellRender.add((survey, options) => {
        console.log({options}); 
        }
      );
  }
}
