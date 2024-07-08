import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  json;
  //"clearInvisibleValues": "onHidden",
  constructor() {
    this.json = {
      title: "Vamsi's Demo",
      showProgressBar: "side",
      // goNextPageAutomatic: true,
      clearInvisibleValues : "onHidden",
      showNavigationButtons: true,
      pages: [
        {
          name: "Section 1",
          questions: [
            {
              type: "matrix",
              name: "Quality",
              title:
                "Please indicate if you agree or disagree with the following statements wrt products",
              description: "*Please valid repsonses*",
              columns: [
                {
                  value: 1,
                  text: "Strongly Disagree"
                },
                {
                  value: 2,
                  text: "Disagree"
                },
                {
                  value: 3,
                  text: "Neutral"
                },
                {
                  value: 4,
                  text: "Agree"
                },
                {
                  value: 5,
                  text: "Strongly Agree"
                }
              ],
              rows: [
                {
                  value: "affordable",
                  text: "Product is affordable"
                },
                {
                  value: "does what it claims",
                  text: "Product does what it claims"
                },
                {
                  value: "better then others",
                  text: "Product is better than other products on the market"
                },
                {
                  value: "easy to use",
                  text: "Product is easy to use"
                }
              ]
            },
            {
              type: "matrix",
              name: "service",
              title:
                "Please indicate if you agree or disagree with the following statements wrt services",
              description: "*Please valid repsonses*",
              columns: [
                {
                  value: 1,
                  text: "Strongly Disagree"
                },
                {
                  value: 2,
                  text: "Disagree"
                },
                {
                  value: 3,
                  text: "Neutral"
                },
                {
                  value: 4,
                  text: "Agree"
                },
                {
                  value: 5,
                  text: "Strongly Agree"
                }
              ],
              rows: [
                {
                  value: "affordable",
                  text: "Service is affordable"
                },
                {
                  value: "does what it claims",
                  text: "Service does what it claims"
                },
                {
                  value: "better then others",
                  text: "Service is better than other services on the market"
                },
                {
                  value: "easy to use",
                  text: "Service is easy to use"
                }
              ]
            }
          ]
          },{
            name : "Section 2",
            questions: [ 
            {
              type: "checkbox",
              name: "age18",
              title: "Are you 18 years old or older?",
              choices: ["Yes", "No", "Hmmm", "Aha"],
              colCount: 0
            },
            {
              type: "radiogroup",
              name: "kids",
              title: "How many kids do you have",
              visibleIf: "{age18} contains 'Yes'",
              // choices: [
              //   { value: 0 },
              //   { value: 1, visibleIf: "{age18}='Yes'"},
              //   { value: 2, visibleIf: "{age18}='Yes'"},
              //   { value: 3 ,visibleIf: "{age18}='Yes'"},
              //   { value: 4 , visibleIf: "{age18}='Yes'"},
              //   {value: 'NA', visibleIf: "{age18}='No'"}
              // ]
              choices: [
                { value: 0 },
                { value: 1, name:"display",enableIf: "{age18}='Yes'" },
                { value: 2, enableIf: "{age18} contains 'Aha' or {age18}contains'Yes'" },
                { value: 3, enableIf: "{age18}='Yes'" },
                { value: 4, enableIf: "{age18}='Yes'" },
                { value: "NA", enableIf: "{age18}='No'" }
              ]
            },]
          },{
            name : "Section 2",
            questions: [
                        {
              type: "radiogroup",
              name: "age19",
              title: "Are you 18 years old or older?",
              choices: ["Yes", "No", "Hmmm", "Aha"],
              colCount: 0
            },
            {
              type: "radiogroup",
              name: "kids",
              title: "How many kids do you have",
              // choices: [
              //   { value: 0 },
              //   { value: 1, visibleIf: "{age18}='Yes'"},
              //   { value: 2, visibleIf: "{age18}='Yes'"},
              //   { value: 3 ,visibleIf: "{age18}='Yes'"},
              //   { value: 4 , visibleIf: "{age18}='Yes'"},
              //   {value: 'NA', visibleIf: "{age18}='No'"}
              // ]
              choices: [
                { value: 0 },
                { value: 1, name:"display",enableIf: "{age19}='Yes'" },
                { value: 2, enableIf: "{age19}='Yes' or {age19}='Aha'" },
                { value: 3, enableIf: "{age19}='Yes'" },
                { value: 4, enableIf: "{age19}='Yes'" },
                { value: "NA", enableIf: "{age19}='No'" }
              ]
            }
          ]
        }
      ]
    };
  }

  sendData(result) {
    //TODO update with your own behavior
    alert("Check your console to view survey response.");
    console.log("Survey response", result);
  }
}
