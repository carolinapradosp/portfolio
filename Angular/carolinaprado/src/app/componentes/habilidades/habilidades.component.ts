import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.less'
})
export class HabilidadesComponent implements OnInit {
  portfolio: any;

  constructor(private portfolioService: PortfolioService){}
  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe(
      (data: any) => {
        this.portfolio = data;
        console.log(this.portfolio);
      },
      (error) => {
        console.error('Erro ao buscar os dados:', error);
      }
    );
  }


}
