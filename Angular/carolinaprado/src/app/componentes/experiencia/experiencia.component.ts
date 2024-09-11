import { PortfolioService } from './../portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.less'
})
export class ExperienciaComponent implements OnInit{

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
