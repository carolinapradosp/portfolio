import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service'; // Verifique se o caminho está correto

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.less']
})
export class ApresentacaoComponent implements OnInit {

  portfolio: any;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    window.scrollBy()
    this.portfolioService.getPortfolio().subscribe(
      (data: any) => {
        this.portfolio = data;
      },
      (error) => {
        console.error('Erro ao buscar os dados:', error);
      }
    );
  }

  scroll():void{
    const scroll = document.getElementById("apresentacao");
    if(scroll){
      const height = scroll.offsetHeight;
      window.scrollTo(0, height)
    }
  }
}
