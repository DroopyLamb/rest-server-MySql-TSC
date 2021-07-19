import { Request, Response } from 'express';
import Usuario from '../models/usuario';


export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll();


    res.json({ usuarios });
}

export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    // Usuario encontrado
    if (usuario) return res.json(usuario);

    // Usuario no encontrado
    res.status(400).json({
        msg: `No existe usuario con el id: ${id}`
    });
}

export const postUsuario = async (req: Request, res: Response) => {

    const { email, nombre, estado } = req.body;

    try {
        const existeEmail = await Usuario.findOne({
            where: {
                email: email
            }
        });

        // Si el email existe, significa que se repide y retornará error
        if (existeEmail) return res.status(400).json({ msg: `Ya existe usuario con el email: ${email}` });

        // Creamos un usuario del mismo tipo del modelo
        const usuario = Usuario.build({ email, nombre, estado });
        await usuario.save();

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }


}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { email, nombre, estado } = req.body;

    try {
        // Validar que exista usuario con ese id
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ msg: `No se encontró usuario con el id: ${id} ` });

        const existeEmail = await Usuario.findOne({
            where: {
                email: email
            }
        });

        // Si el email existe, significa que se repide y retornará error
        if (existeEmail) return res.status(400).json({ msg: `Ya existe usuario con el email: ${email}` });

        // Update de los nuevos datos del usuario
        await usuario.update({ email, nombre, estado });

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}


export const deleteUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ msg: `No se encontró usuario con el id: ${id} ` });

        // Eliminación física
        // await usuario.destroy();

        // Eliminación lógica
        await usuario.update({estado: false});

        res.json({
            msg: 'Usuario borrado',
            id
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}


