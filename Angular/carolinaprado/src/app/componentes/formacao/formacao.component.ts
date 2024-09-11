import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';


@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.less'
})
export class FormacaoComponent implements OnInit{

  portfolio: any;

  constructor(private portfolioService: PortfolioService){}
  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe(
      (data: any) => {
        this.portfolio = data;
      },
      (error) => {
        console.error('Erro ao buscar os dados:', error);
      }
    );
  }


}
