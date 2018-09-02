import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Mr. Nice", weapon: "sword" },
      { id: 12, name: "Narco", weapon: "dagger" },
      { id: 13, name: "Bombasto", weapon: "sonar attacks" },
      { id: 14, name: "Celeritas", weapon: "vegetation control" },
      { id: 15, name: "Magneta", weapon: "magentic field" },
      { id: 16, name: "RubberMan", weapon: "elasticity" },
      { id: 17, name: "Dynama", weapon: "explosives" },
      { id: 18, name: "Dr IQ", weapon: "strategic planning" },
      { id: 19, name: "Magma", weapon: "magma" },
      { id: 20, name: "Tornado", weapon: "wind control" }
    ];
    return { heroes };
  }
}
