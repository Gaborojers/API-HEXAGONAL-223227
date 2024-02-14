import { Users } from './Users';

export class UsersRepository {
  public users: Users[] = [];
  public nextId: number = 1;

  addUser(user: Users): Users {
    const newProduct = new Users(this.nextId++, user.nombre, user.apellidoP, user.apellidoM, user.genero, user.edad, user.correo, user.password);
    this.users.push(newProduct);
    return newProduct;
  }

  getUserById(userId: number): Users | null {
    const user = this.users.find((p) => p.id === userId);
    return user ? { ...user } : null;
  }

  getAllUsers(): Users[] {
    return this.users.map((product) => ({ ...product }));
  }
 
  updateUser(updatedUser: Users): Users | null {
    const index = this.users.findIndex((p) => p.id === updatedUser.id);

    if (index !== -1) {
      this.users[index] = { ...updatedUser };
      return { ...updatedUser };
    }

    return null;
  }

  deleteUser(userId: number): boolean {
    const index = this.users.findIndex((p) => p.id === userId);

    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }

    return false;
  }
}