import { Component, ElementRef, OnInit } from '@angular/core';
import { Main_serviceService } from '../main_service/main_service.service';

@Component({
  selector: 'app-predict-dashboard',
  templateUrl: './predict-dashboard.component.html',
  styleUrls: ['./predict-dashboard.component.css']
})
export class PredictDashboardComponent implements OnInit {
  text_predict: string = ''; // Initialize text_predict

  bps: number = 0;
  bpd: number = 0;
  bw: number = 0;
  height: number = 0;
  fbs: number = 0;
  bmiz: number = 0;
  tg: number = 0;
  hdl: number = 0;
  creatinine: number = 0;
  hba1c: number = 0;
  waist: number = 0;

  fh: number = 0;
  smoking_type_id: number = 1;
  drinking_type_id: number = 1;

  egfr: number = 0;

  constructor(
    private _serviceService: Main_serviceService,
    private el: ElementRef) {
  }

  ngOnInit() {
    this._serviceService.authenticate().subscribe((response: any) => {
      console.log(response.result.response);
    });
    this.function_slider();

    // You can add initialization logic here if needed
  }

  function_slider() {
    const bps = this.el.nativeElement.querySelector('#bps');
    const bpd = this.el.nativeElement.querySelector('#bpd');
    const bw = this.el.nativeElement.querySelector('#bw');
    const height = this.el.nativeElement.querySelector('#height');
    const fbs = this.el.nativeElement.querySelector('#fbs');
    const bmiz = this.el.nativeElement.querySelector('#bmiz');
    const tg = this.el.nativeElement.querySelector('#tg');
    const hdl = this.el.nativeElement.querySelector('#hdl');
    const creatinine = this.el.nativeElement.querySelector('#creatinine');
    const hba1c = this.el.nativeElement.querySelector('#hba1c');
    const waist = this.el.nativeElement.querySelector('#waist');
    const egfr = this.el.nativeElement.querySelector('#egfr');


    const bpsValue = this.el.nativeElement.querySelector('#bpsValue');
    const bpdValue = this.el.nativeElement.querySelector('#bpdValue');
    const bwValue = this.el.nativeElement.querySelector('#bwValue');
    const heightValue = this.el.nativeElement.querySelector('#heightValue');
    const fbsValue = this.el.nativeElement.querySelector('#fbsValue');
    const bmizValue = this.el.nativeElement.querySelector('#bmizValue');
    const tgValue = this.el.nativeElement.querySelector('#tgValue');
    const hdlValue = this.el.nativeElement.querySelector('#hdlValue');
    const creatinineValue = this.el.nativeElement.querySelector('#creatinineValue');
    const hba1cValue = this.el.nativeElement.querySelector('#hba1cValue');
    const waistValue = this.el.nativeElement.querySelector('#waistValue');
    const egfrValue = this.el.nativeElement.querySelector('#egfrValue');

    bps.addEventListener('input', () => {
      bpsValue.textContent = ' ' + bps.value;
    });
    bpd.addEventListener('input', () => {
      bpdValue.textContent = ' ' + bpd.value;
    });
    bw.addEventListener('input', () => {
      bwValue.textContent = ' ' + bw.value;
    });
    height.addEventListener('input', () => {
      heightValue.textContent = ' ' + height.value;
    });
    fbs.addEventListener('input', () => {
      fbsValue.textContent = ' ' + fbs.value;
    });
    bmiz.addEventListener('input', () => {
      bmizValue.textContent = ' ' + bmiz.value;
    });
    tg.addEventListener('input', () => {
      tgValue.textContent = ' ' + tg.value;
    });
    hdl.addEventListener('input', () => {
      hdlValue.textContent = ' ' + hdl.value;
    });
    creatinine.addEventListener('input', () => {
      creatinineValue.textContent = ' ' + creatinine.value;
    });
    hba1c.addEventListener('input', () => {
      hba1cValue.textContent = ' ' + hba1c.value;
    });
    waist.addEventListener('input', () => {
      waistValue.textContent = ' ' + waist.value;
    });
    egfr.addEventListener('input', () => {
      egfrValue.textContent = ' ' + egfr.value;
    });





  }
  submitForm() {
    // console.log(this.bps);
    // console.log(this.bpd);
    // console.log(this.bw);
    // console.log(this.height);
    // console.log(this.fbs);
    // console.log(this.bmiz);
    // console.log(this.tg);
    // console.log(this.hdl);
    // console.log(this.creatinine);
    // console.log(this.hba1c);
    // console.log(this.fh);
    // console.log(this.waist);
    // console.log(this.smoking_type_id);
    // console.log(this.drinking_type_id);
    // console.log(this.egfr);
    // this._serviceService.per_diabets_bandung().subscribe((response: any) => {
    //   console.log(response.result.response);
    // });
    const applicationData = {
      bps:this.bps,
      bpd:this.bpd,
      bw:this.bw,
      height:this.height,
      fbs:this.fbs,
      bmiz:this.bmiz,
      tg:this.tg,
      hdl:this.hdl,
      creatinine:this.creatinine,
      hba1c:this.hba1c,
      fh:this.fh,
      waist:this.waist,
      smoking_type_id:this.smoking_type_id,
      drinking_type_id:this.drinking_type_id,
      egfr:this.egfr
    }
    this._serviceService.per_diabets_bandung(applicationData).subscribe((response: any) => {
      console.log(response.result);
    });

    this._serviceService.get_profile().subscribe((response: any) => {
      console.log(response.result.response);
    });
  }
}
