https://www.youtube.com/watch?v=ot1LRr3ez5Q

```sh
ng new dashboard
```

SCSS  
no angular routing

```sh
cd dashboard
```

make header component
```sh
ng g c header
```

make side-nav component
```sh
ng g c side-nav
```

make main component
```sh
ng g c main
```

make top-widgets component
```sh
ng g c top-widgets
```

make sales-by-month component
```sh
ng g c sales-by-month
```

make sales-by-category component
```sh
ng g c sales-by-category
```

make last-few-transactions component
```sh
ng g c last-few-transactions
```

make top-three-products component
```sh
ng g c top-three-products
```

start the serve
```sh
ng s
```

copy paste this code to the styles.scss
``` scss
@import url("https://fonts.googleapis.com/css2?family=Aboreto&family=Exo:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Exo", sans-serif;
  background-color: #d8d8d8;
}


::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #a6d5fb;
}

::-webkit-scrollbar-thumb:hover {
  background: #012645;
}
```

modify the app.component.html
``` html
<div class="container">
  <div class="header">
    <app-header></app-header>
  </div>
  <div class="main-container">
    <div class="side-nav">
      <app-side-nav></app-side-nav>
    </div>
    <div class="main">
      <app-main></app-main>
    </div>
  </div>
</div>
```

modify the app.component.scss file
``` scss
.main-container {
  display: flex;
  .side-nav {
    width: 350px;
    min-width: 230px;
    min-height: calc(100vh - 70px);
    background-color: #113c60;
    color: #fff;
    box-shadow: 5px 5px 5px #939393;
    @media only screen and (max-width: 1300px) {
      width: 100px;
      min-width: 100px;
    }
  }
  .main {
    padding: 30px;
  }
}
```

make the header component
modify the header.component.html file
``` html
<div class="header">
    <div class="logo">Logo</div>
    <div class="user">
      <div class="user-name">Surender</div>
      <div class="user-image">SN</div>
    </div>
  </div>
```

modify the header.component.scss file
``` scss
.header {
    height: 70px;
    padding: 20px 50px;
    background-color: rgb(1, 38, 69);
    color: #fff;
    display: flex;
    justify-content: space-between;
    box-shadow: 5px 5px 5px #939393;
    .logo {
      font-weight: bold;
      font-size: 20px;
    }
    .user {
      display: flex;
      align-items: center;
      font-weight: bold;
      .user-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #fff;
        background-color: rgb(11, 107, 185);
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }
    }
  }
```

make side-nav component
modify the side-nav.component.html file
``` html
<div class="nav-items">
  <div class="nav-item">
    <fa-icon [icon]="faDashboard"></fa-icon>
    <span>Dashboard</span>
  </div>
  <div class="nav-item">
    <fa-icon [icon]="faLocation"></fa-icon>
    <span>Locations</span>
  </div>
  <div class="nav-item">
    <fa-icon [icon]="faShop"></fa-icon>
    <span>Shops</span>
  </div>
  <div class="nav-item">
    <fa-icon [icon]="faBox"></fa-icon>
    <span>Products</span>
  </div>
  <div class="nav-item">
    <fa-icon [icon]="faMoneyBill"></fa-icon>
    <span>Sales</span>
  </div>
  <div class="nav-item">
    <fa-icon [icon]="faChartBar"></fa-icon>
    <span>Statistics</span>
  </div>
  <div class="nav-item">
    <fa-icon [icon]="faContactBook"></fa-icon>
    <span>Contact</span>
  </div>
  <div class="nav-item">
    <fa-icon [icon]="faHand"></fa-icon>
    <span>Help</span>
  </div>
</div>

```
modify the side-nav.component.scss file
``` scss
.nav-items {
  padding-top: 40px;
  .nav-item {
    padding: 25px 50px;
    cursor: pointer;
    @media only screen and (max-width: 1300px) {
      padding: 25px 40px;
    }
    &:hover {
      background-color: rgb(1, 38, 69);
    }
    fa-icon {
      margin-right: 20px;
      font-size: 22px;
    }
    span {
      display: inline;
      @media only screen and (max-width: 1300px) {
        display: none;
      }
    }
  }
}
```

add font awesome to the project
check your angular version
``` sh
ng version
```

go to this link to check the compatibility of the font awesome with your angular version: https://www.npmjs.com/package/@fortawesome/angular-fontawesome?activeTab=readme  
<br>
im using angular 16.2 so the fontawesome code that i will used will be 0.13.0

```sh
ng add @fortawesome/angular-fontawesome@0.13.0
```

change side-nav.component.ts to this to add the faicons to the side nav
``` typescript
import { Component, OnInit } from '@angular/core';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;

  constructor() { }

  ngOnInit(): void {
  }

}
```

make the main component
change the main.component.html
```html
<div class="top-section">
  <app-top-widgets></app-top-widgets>
</div>
<div class="middle-section">
  <div class="widget left">
    <app-sales-by-month></app-sales-by-month>
  </div>
  <div class="widget right">
    <app-sales-by-category></app-sales-by-category>
  </div>
</div>
<div class="bottom-section">
  <div class="widget left">
    <app-last-few-transactions></app-last-few-transactions>
  </div>
  <div class="widget right">
    <app-top-three-products></app-top-three-products>
  </div>
</div>
```

change the main.component.scss
``` scss
.top-section {
  @media only screen and (max-width: 1600px) {
    width: 1280px;
  }
  @media only screen and (max-width: 1500px) {
    width: 1180px;
  }
  @media only screen and (max-width: 1400px) {
    width: 1080px;
  }
  @media only screen and (max-width: 1200px) {
    width: 980px;
  }
}
.middle-section {
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1600px) {
    width: 1280px;
  }
  @media only screen and (max-width: 1500px) {
    width: 1180px;
  }
  @media only screen and (max-width: 1400px) {
    width: 1080px;
  }
  @media only screen and (max-width: 1200px) {
    width: 980px;
  }
  .widget {
    height: 350px;
    background-color: #fff;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 5px 5px 5px #939393;
    &.left {
      width: 890px;
      @media only screen and (max-width: 1600px) {
        width: 790px;
      }
      @media only screen and (max-width: 1500px) {
        width: 690px;
      }
      @media only screen and (max-width: 1400px) {
        width: 590px;
      }
      @media only screen and (max-width: 1200px) {
        width: 490px;
      }
    }
    &.right {
      width: 450px;
    }
  }
}
.bottom-section {
  display: flex;
  justify-content: space-between;
  .widget {
    height: 250px;
    background-color: #fff;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 5px 5px 5px #939393;
    &.left {
      width: 670px;
      @media only screen and (max-width: 1200px) {
        width: 570px;
      }
    }
    &.right {
      width: 670px;
      @media only screen and (max-width: 1600px) {
        width: 570px;
      }
      @media only screen and (max-width: 1500px) {
        width: 470px;
      }
      @media only screen and (max-width: 1400px) {
        width: 370px;
      }
      @media only screen and (max-width: 1200px) {
        width: 370px;
      }
    }
  }
}
```

make top widgets component
change top-widgets.component.html
``` html

```
change top-widgets.component.scss
``` scss
.widget-container {
  display: flex;
  align-items: space-between;
  .widget {
    width: 325px;
    height: 175px;
    background-color: #fff;
    color: #fff;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 5px 5px 5px #939393;
    display: flex;
    align-items: center;
    padding: 20px;
    &.green {
      background-color: rgb(4, 67, 66);
    }
    &.yellow {
      background-color: rgb(237, 158, 32);
    }
    &.red {
      background-color: rgb(126, 5, 5);
    }
    &.blue {
      background-color: rgb(105, 32, 251);
    }
    @media only screen and (max-width: 1600px) {
      width: 300px;
    }
    @media only screen and (max-width: 1500px) {
      width: 275px;
    }
    @media only screen and (max-width: 1400px) {
      width: 250px;
    }
    @media only screen and (max-width: 1200px) {
      width: 225px;
    }

    .icon {
      width: 100px;
      font-size: 60px;
      text-align: center;
      @media only screen and (max-width: 1200px) {
        font-size: 45px;
      }
    }
    .value {
      text-align: center;
      width: 175px;
      .top {
        font-size: 30px;
        @media only screen and (max-width: 1200px) {
          font-size: 26px;
        }
      }
      .bottom {
        font-size: 20px;
        margin-top: 10px;
        @media only screen and (max-width: 1200px) {
          font-size: 16px;
        }
      }
    }
  }
}
```

make the sales by month component
install angular highcharts

``` sh
npm i --save angular-highcharts highcharts
```

add ChartModule in `app.module.ts`
``` typescript
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

change the `sales-by-month.component.html.ts`
```html
<div class="chart-container" [chart]="chart"></div>
```
change the `sales-by-month.component.scss.ts`
```scss
.chart-container {
  padding: 20px;
}
```
change the `sales-by-month.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "Arizona",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Connecticut',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Ohio',
        type: 'line',
        color: '#ed9e20',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
```