import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../modules/User";
import { Results } from '../../modules/results';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  data?: User;
  loading: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser().subscribe((res: Results) => {
      this.data = res.results[0];
      this.loading = false;
    });
  };

}
