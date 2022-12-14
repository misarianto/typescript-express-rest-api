import { Request, Response } from "express"
import IController from "./ControllerInterface"

let data: any[] = [
    { id: 1, name: "Mis Arianto" },
    { id: 2, name: "Nurmala Sari" },
    { id: 3, name: "Hadid Syurahbil" },
    { id: 4, name: "Agus Riana" },
    { id: 5, name: "Ahmad" },
]

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send(data)
    }

    create(req: Request, res: Response): Response {
        // destructing object 
        const {id, name} = req.body

        data.push({
            id,
            name
        })

        return res.send({
            message: "successfully insert data!",
            data
        })
    }

    show(req: Request, res: Response): Response {
        const {id} = req.params

        let person = data.find(item => item.id == id)

        return res.send(person)
    }

    update(req: Request, res: Response): Response {
        const {id} = req.params
        const {name} = req.body

        let person = data.find(item => item.id == id)
        person.name = name

        return res.send({
            message: "successfully update data!",
            person
        })
    }

    delete(req: Request, res: Response): Response {
        const {id} = req.params
        let person = data.filter(item => item.id != id)
        return res.send({
            message: "successfully delete data!",
            person
        })
    }
}

export default new UserController()