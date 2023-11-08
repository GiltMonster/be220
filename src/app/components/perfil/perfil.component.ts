import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {

  // MAPEAR OS DADOS DA API DEPOIS, POR ENQUANTO FICA ANY
  loading: boolean = true;
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.userService.getUser().subscribe((res) => {
      this.data = res?.results[0];
      this.loading = false;
      console.log("data:", this.data);

    });
  };

}
