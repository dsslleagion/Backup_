import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Cliente } from "../entities/Cliente";
import { authAdmin, generateToken } from "../middlewares";
import { loggerDelete, loggerUpdate } from "../config/logger";
import cliente from "../routes/cliente";
import { info, error, warm } from "../postMongo";
import { Noticia } from "../entities/Noticia";

class NoticiaController {
    public async index(req: Request, res: Response) {
        try {
            const noticiaRepository = AppDataSource.getRepository(Noticia);
            const noticias = await noticiaRepository.find();
            res.json(noticias);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar as notícias.' });
        }
    }

    public async show(req: Request, res: Response) {
        try {
            const noticiaRepository = AppDataSource.getRepository(Noticia);
            const noticiaId: number = parseInt(req.params.id); // Garantindo que o id seja um número
            const noticia = await noticiaRepository.findOne({ where: { id: noticiaId } });
            if (!noticia) {
                return res.status(404).json({ message: 'Notícia não encontrada.' });
            }
            res.json(noticia);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar a notícia.' });
        }
    }

    public async store(req: Request, res: Response) {
        try {
            const noticiaRepository = AppDataSource.getRepository(Noticia);
            const noticia = noticiaRepository.create(req.body);
            const result = await noticiaRepository.save(noticia);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar a notícia.' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const noticiaRepository = AppDataSource.getRepository(Noticia);
            const noticiaId: number = parseInt(req.params.id); // Garantindo que o id seja um número
            const noticia = await noticiaRepository.findOne({ where: { id: noticiaId } });
            if (!noticia) {
                return res.status(404).json({ message: 'Notícia não encontrada.' });
            }
            noticiaRepository.merge(noticia, req.body);
            const result = await noticiaRepository.save(noticia);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar a notícia.' });
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const noticiaRepository = AppDataSource.getRepository(Noticia);
            const noticiaId: number = parseInt(req.params.id); // Garantindo que o id seja um número
            const noticia = await noticiaRepository.findOne({ where: { id: noticiaId } });
            if (!noticia) {
                return res.status(404).json({ message: 'Notícia não encontrada.' });
            }
            const result = await noticiaRepository.remove(noticia);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao excluir a notícia.' });
        }
    }

}

export default new NoticiaController();