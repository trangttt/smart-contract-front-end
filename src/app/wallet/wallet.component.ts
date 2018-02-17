import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-wallet',
  providers: [Web3Service],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
	
	currentBlockNumber: any;
	coinbase: any;
	myWeb3: any;


  constructor(private myWeb3: Web3Service) {
  }

  ngOnInit() {
  	this.myWeb3 = this.myWeb3.web3;
  	this.coinbase = this.myWeb3.eth.coinbase;

  	this.myWeb3.eth.getBlockNumber( (err, res) => {
  		console.log("Current Block Number:", res);
  		this.currentBlockNumber = res;
  		console.log(this.currentBlockNumber);
  	});
  	
  }

  getBlockNumber(){
  	console.log(this.myWeb3.eth.coinbase);
  }

}
