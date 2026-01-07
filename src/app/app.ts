import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from './user-card/user-card';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCard, NgIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  users = [
    { name: 'Uberlei Silva', email: 'uberlei.silva@radixeng.com', role: 'Developer' },
    { name: 'Daniel Porto', email: 'daniel.porto@radixeng.com', role: 'Developer' },
    { name: 'Igor Dávilla', email: 'igor.davilla@radixeng.com', role: 'Developer' },
    { name: 'Cristina Souza', email: 'cristina.souza@radixeng.com', role: 'Developer' },
    { name: 'Lucas Serejo', email: 'lucas.serejo@radixeng.com', role: 'Developer' },
    { name: 'Igor Muniz', email: 'igor.muniz@radixeng.com', role: 'Tech Lead' },
    { name: 'Julia Motta', email: 'julia.motta@radixeng.com', role: 'Business Analyst' },
    { name: 'Laura Pereira', email: 'laura.pereira@radixeng.com', role: 'Business Analyst' },
    { name: 'Romulo Bravo', email: 'romulo.bravo@radixeng.com', role: 'Web Designer' },
    { name: 'André Porto', email: 'andre.porto@radixeng.com', role: 'Project Coordinator' },
  ];

  filteredUsers = this.users;
  errorMessage = '';

  filterUser(value: string): void {
    this.errorMessage = '';

    if (value.length < 3) {
      this.errorMessage = 'Please enter at least 3 characters to filter.';
      this.filteredUsers = this.users;
      return;
    }

    if (value.trim() === '') {
      this.filteredUsers = this.users;
      return;
    }

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase()) ||
      user.email.toLowerCase().includes(value.toLowerCase()) ||
      user.role.toLowerCase().includes(value.toLowerCase())
    );
  }
}
