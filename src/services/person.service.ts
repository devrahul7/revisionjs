import { PersonArrayRepository } from "../repositories/person.repository";
import { CreatePersonDTO } from "../dtos/person.dto";
import { HttpException } from "../exceptions/http-exception";

const perosnRepo = new PersonArrayRepository();

export class PersonService {
    getOnePerson(id?: number){
        if(!id){
            throw new HttpException(400, "Id is required");
        }
        const person = perosnRepo.getOne(id);
        if(!person){
            throw new HttpException(404, "Person not found");
        }
        //transform
        person.name = person.name.toUpperCase();
        return person;

    }

    createPerson(data: CreatePersonDTO){
        if(data.age <18){
            throw new HttpException(400, "person must be at least 18 years old");
        }
        const perosn = {
            id:Date.now(), //generate unoqwue id
            ...data
        }
        const created = perosnRepo.createPerson(perosn);
        if(!created){
            throw new HttpException(500, "Failed to create person");
        }
        return created;

    }

     updatePerson(id?: number){
        if(!id){
            throw new HttpException(400, "Id is required");
        }
        const person = perosnRepo.updatePerson(id);
        if(!person){
            throw new HttpException(404, "Person not found");
        }
        //transform
        person.name = person.name.toUpperCase();
        return person;

    }

}