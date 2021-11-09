import { Injectable } from '@nestjs/common';
import Pet from './pet.entity'

const pets = [
  {
    id: 1,
    name: 'WangWang'
  },
  {
    id: 2,
    name: 'MiMi'
  }
]

@Injectable()
export class AppService {
  findAll(queryName?: string): Pet[] {
    return pets.filter(item => !queryName || item.name === queryName)
  }

  findOne(id: number): Pet | null {
    return pets.find(item => item.id === id)
  }

  create(pet: Pet): number {
    const id = pets.length + 1
    pets.push({
      ...pet,
      id
    })
    return id
  }
}
