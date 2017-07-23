import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {

  @Input()
  private keyword:string;

  private price:number;

  @Output()
  searchResult:EventEmitter<StockInfo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      let stockInfo:StockInfo = new StockInfo(this.keyword,100*Math.random());
      this.price = stockInfo.price;
      this.searchResult.emit(stockInfo);
    },3000)
  }
}

export class StockInfo{
  constructor(public name:string,public price:number){
  }
}
