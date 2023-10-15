import { Component, ElementRef, OnInit } from '@angular/core';
import { Main_serviceService } from '../main_service/main_service.service';

@Component({
  selector: 'app-predict-dashboard',
  templateUrl: './predict-dashboard.component.html',
  styleUrls: ['./predict-dashboard.component.css']
})
export class PredictDashboardComponent implements OnInit {
  text_predict: string = ''; // Initialize text_predict

  Pregnancies: number = 0;
  Glucose: number = 0;
  BloodPressure: number = 0;
  SkinThickness: number = 0;
  Insulin: number = 0;
  BMIz: number = 0;
  DiabetesPedigreeFunction: number = 0;
  Age: number = 0;

  constructor(
    private _serviceService: Main_serviceService,
    private el: ElementRef) {
  }

  ngOnInit() {
    this.function_slider();
    this.resetValues()
    // this._serviceService.authenticate().subscribe((response: any) => {
    //   // console.log(response.result.response);
    // });
    // // You can add initialization logic here if needed
  }

  function_slider() {
    const Pregnancies = this.el.nativeElement.querySelector('#Pregnancies');
    const Glucose = this.el.nativeElement.querySelector('#Glucose');
    const BloodPressure = this.el.nativeElement.querySelector('#BloodPressure');
    const SkinThickness = this.el.nativeElement.querySelector('#SkinThickness');
    const Insulin = this.el.nativeElement.querySelector('#Insulin');
    const BMIz = this.el.nativeElement.querySelector('#BMIz');
    const DiabetesPedigreeFunction = this.el.nativeElement.querySelector('#DiabetesPedigreeFunction');
    const Age = this.el.nativeElement.querySelector('#Age');


    const PregnanciesValue = this.el.nativeElement.querySelector('#PregnanciesValue');
    const GlucoseValue = this.el.nativeElement.querySelector('#GlucoseValue');
    const BloodPressureValue = this.el.nativeElement.querySelector('#BloodPressureValue');
    const SkinThicknessValue = this.el.nativeElement.querySelector('#SkinThicknessValue');
    const InsulinValue = this.el.nativeElement.querySelector('#InsulinValue');
    const BMIzValue = this.el.nativeElement.querySelector('#BMIzValue');
    const DiabetesPedigreeFunctionValue = this.el.nativeElement.querySelector('#DiabetesPedigreeFunctionValue');
    const AgeValue = this.el.nativeElement.querySelector('#AgeValue');

    Pregnancies.addEventListener('input', () => {
      PregnanciesValue.textContent = ' ' + Pregnancies.value;
    });
    Glucose.addEventListener('input', () => {
      GlucoseValue.textContent = ' ' + Glucose.value;
    });
    BloodPressure.addEventListener('input', () => {
      BloodPressureValue.textContent = ' ' + BloodPressure.value;
    });
    SkinThickness.addEventListener('input', () => {
      SkinThicknessValue.textContent = ' ' + SkinThickness.value;
    });
    Insulin.addEventListener('input', () => {
      InsulinValue.textContent = ' ' + Insulin.value;
    });
    BMIz.addEventListener('input', () => {
      BMIzValue.textContent = ' ' + BMIz.value;
    });
    DiabetesPedigreeFunction.addEventListener('input', () => {
      DiabetesPedigreeFunctionValue.textContent = ' ' + DiabetesPedigreeFunction.value;
    });
    Age.addEventListener('input', () => {
      AgeValue.textContent = ' ' + Age.value;
    });





  }
  resetValues() {
    this.Pregnancies = 0;
    this.Glucose = 0;
    this.BloodPressure = 0;
    this.SkinThickness = 0;
    this.Insulin = 0;
    this.BMIz = 0;
    this.DiabetesPedigreeFunction = 0;
    this.Age = 0;
  }
  submitForm() {
    console.log("asdw");
    this.text_predict = "asdw";
    console.log(this.text_predict);

    // this._serviceService.per_diabets_bandung().subscribe((response: any) => {
    //   console.log(response.result.response);
    // });
    this._serviceService.per_diabets_bandung().subscribe((response: any) => {
      console.log(response.result);
    });

    this._serviceService.get_profile().subscribe((response: any) => {
      console.log(response.result.response);
    });
  }
}
