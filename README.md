# angular版 翻牌器cc-flop

## 安装
npm install cc-flop --save 或 yarn add cc-flop

## 使用
```javascript
// 业务模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CcFlopModule } from 'cc-flop';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CcFlopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  data = 50000;
  changeData() {
    this.data =  Math.floor(Math.random() * (10000));
  }
}


//业务html
<button (click)="changeData();">更换数据</button>

<div ccFlop [data]="data" style="width:200px;height: 60px;font-size: 16em;" #outputData="letData">
    {{outputData.outputData}}</div>

```

## 参数
1. data：数据<br>

2. start：开始数字<br>

3. ticks：核对数量<br>

4. speed：速度<br>

