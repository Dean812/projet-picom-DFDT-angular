import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/business/client';
import { Utilisateur } from 'src/app/business/utilisateur';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  client: Client;
  utilisateurs!: Utilisateur[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inscriptionService: InscriptionService
  ) {
    this.client = new Client();
  }
  ngOnInit(): void { }

  onSubmit() {
    this.inscriptionService.ajouterClient(this.client).subscribe(client => {
      console.log(client);
      // this.router.navigate(['/index']);
    }
    );
  }

  goToLogin() {

  }

}
