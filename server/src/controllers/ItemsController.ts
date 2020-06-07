import { Request, Response } from 'express';
import connection from '../database/connection';

class ItemsController {
    async index(req: Request, res: Response) {
        try {
            const items = await connection('items').select('*');
        
            const serializedItems = items.map(item => {
                return {
                    id: item.id, 
                    title: item.title, 
                    image_url: `http://192.168.15.19:3333/uploads/${item.image}`
                }
            });
        
            return res.json(serializedItems);
        } catch (error) {
            console.log(error);
        }
    }
}

export default ItemsController