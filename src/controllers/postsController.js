import pool from '../dbConfig/conn.js';
//Si desea probar con data real con postman mandar en el response json(DataPrueba)
const DataPrueba = [
    {
        "id": 1,
        "title": "Post 1",
        "content": "Contenido del post 1"
    },
    {
        "id": 2,
        "title": "Post 2",
        "content": "Contenido del post 2"
    },
    {
        "id": 3,
        "title": "Post 3",
        "content": "Contenido del post 3"
    }
]
//listar todos los post 
export const getAllPosts = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM blogs');
      
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los posts', error: err });
    }
};

//detalle de un post
export const getPostById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener el post', error: err });
    }
}


//Crear un nuevo post
export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        await pool.query('INSERT INTO blogs (title, content) VALUES (?, ?)', [title, content]);
        res.status(201).json({ message: 'Post creado' });
    } catch (err) {
        res.status(500).json({ message: 'Error al crear el post', error: err });
    }
}

//Modificar un post
export const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        await pool.query('UPDATE blogs SET title = ?, content = ? WHERE id = ?', [title, content, req.params.id]);
        res.status(200).json({ message: 'Post actualizado' });
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar el post', error: err });
    }
}

//Eliminar un post
export const deletePost = async (req, res) => {
    try {
        await pool.query('DELETE FROM blogs WHERE id = ?', [req.params.id]);
        res.status(200).json({ message: 'Post eliminado' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar el post', error: err });
    }
}