import pool from '../dbConfig/conn.js';
// Si desea probar con data real con postman mandar en el response json(DataPrueba)
const DataPrueba = [
  {
    id: 1,
    name_device: 'Post 1',
    relase_date:'00-00-00',
    field_view: '360',
    weight:'50kg',
    relase_price:'$1000',
    resolution_eye: 'Contenido del post 1',
  },
  {
    id: 1,
    name_device: 'Post 1',
    relase_date:'00-00-00',
    field_view: '360',
    weight:'50kg',
    relase_price:'$1000',
    resolution_eye: 'Contenido del post 1',
  },
  {
    id: 1,
    name_device: 'Post 1',
    relase_date:'00-00-00',
    field_view: '360',
    weight:'50kg',
    relase_price:'$1000',
    resolution_eye: 'Contenido del post 1',
  },
];
// listar todos los post
export const getAllPosts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error al crear el post:', err);
    res.status(500).json({ message: 'Error al obtener los posts', error: err });
  }
};

// detalle de un post
export const getPostById = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el post', error: err });
  }
};

// Crear un nuevo post
export const createPost = async (req, res) => {
  try {
    const { name_device, resolution_eye, relase_date, field_view, weight, relase_price } = req.body;
    await pool.query('INSERT INTO blogs (name_device, resolution_eye, relase_date, field_view, weight, relase_price) VALUES (?, ?, ?, ?, ?, ?)', [name_device, resolution_eye, relase_date, field_view, weight, relase_price]);
    res.status(201).json({ message: 'Post creado' });
  } catch (err) {
    console.error('Error al crear el post:', err);

    res.status(500).json({ message: 'Error al crear el post', error: err.message });
  }
};

// Modificar un post
export const updatePost = async (req, res) => {
  try {
    const {id, name_device, resolution_eye, relase_date, field_view, weight, relase_price } = req.body;
    await pool.query(
      'UPDATE blogs SET id = ?, name_device = ?, resolution_eye = ?, relase_date = ?, field_view = ?, weight = ?, relase_price = ? WHERE id = ?',
      [name_device, resolution_eye, relase_date, field_view, weight, relase_price, req.params.id]
    );
    res.status(200).json({ message: 'Post actualizado' });
  } catch (err) {
    console.error('Error al actualizar el post:', err);
    res.status(500).json({ message: 'Error al actualizar el post', error: err.message });
  }
};

// Eliminar un post
export const deletePost = async (req, res) => {
  try {
    await pool.query('DELETE FROM blogs WHERE id = ?', [req.params.id]);
    res.status(200).json({ message: 'Post eliminado' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el post', error: err });
  }
};
