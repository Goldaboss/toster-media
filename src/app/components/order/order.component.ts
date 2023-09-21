import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public colors: any[] = [
    { name: 'Black', value: 'Black' },
    { name: 'Orange', value: 'Orange' },
    { name: 'Pink', value: 'Pink' },
    { name: 'Yellow', value: 'Yellow' },
  ];
  public sizes: any[] = [
    { size: '2', value: '2' },
    { size: '3', value: '3' },
    { size: '4', value: '4' },
    { size: '5', value: '5' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      colorValue: ['Black'],
      sizeValue: ['2'],
    });
  }

  submit() {
    console.log(this.form);
  }
}
