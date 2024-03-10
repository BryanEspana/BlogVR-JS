import pool from '../dbConfig/conn.js';
// listar todos los post
export const getAllPosts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs');
    res.status(200).json({
      code: 200, 
      message: 'Post actualizado',
      data: rows
    });
  } catch (err) {
    console.error('Error al crear el post:', err);
    res.status(500).json({
       code: 500,
       message: 'Error al obtener los posts', 
       error: err });
  }
};

// detalle de un post
export const getPostById = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
    if (rows.length > 0) {
      res.status(200).json({ 
        code: 200,
        message: 'Post recuperado exitosamente',
        data: rows[0]
      });
    } else {
      res.status(404).json({ 
        code: 404,
        message: 'Post no encontrado',
        description: `No se encontró el post con el id ${req.params.id}`
      });
    }
  } catch (err) {
    res.status(500).json({ 
      code: 500,
      message: 'Error al obtener el post',
      description: err.message 
    });
  }
};
// post con imagen en base64 (funciona el metodo pero en la base de datos no se agrego imagenes)
app.post('/postsIMG', async (req, res) => {
  const { title, content, imageBase64 } = req.body;
  try {
      const newBlog = await createBlog({ title, content, imageBase64 });
      res.status(201).json({ message: 'Blog creado exitosamente', blog: newBlog });
  } catch (error) {
      res.status(500).json({ message: 'Error al crear el blog', error: error.message });
  }
});

// Crear un nuevo post
export const createPost = async (req, res) => {
  try {
    const { name_device, resolution_eye, relase_date, field_view, weight, relase_price } = req.body;
    await pool.query('INSERT INTO blogs (name_device, resolution_eye, relase_date, field_view, weight, relase_price) VALUES (?, ?, ?, ?, ?, ?)', [name_device, resolution_eye, relase_date, field_view, weight, relase_price]);
    res.status(201).json({ 
      code: 201,
      message: 'Post creado exitosamente'
    });
  } catch (err) {
    console.error('Error al crear el post:', err);
    res.status(500).json({ 
      code: 500,
      message: 'Error al crear el post',
      description: err.message 
    });
  }
};


// Modificar un post
export const updatePost = async (req, res) => {
  try {
    const { name_device, resolution_eye, relase_date, field_view, weight, relase_price } = req.body;
    await pool.query(
      'UPDATE blogs SET name_device = ?, resolution_eye = ?, relase_date = ?, field_view = ?, weight = ?, relase_price = ? WHERE id = ?',
      [name_device, resolution_eye, relase_date, field_view, weight, relase_price, req.params.postId]
    );
    res.status(200).json({ 
      code: 200,
      message: 'Post actualizado exitosamente'
    });
  } catch (err) {
    console.error('Error al actualizar el post:', err);
    res.status(500).json({ 
      code: 500,
      message: 'Error al actualizar el post',
      description: err.message 
    });
  }
};



// Eliminar un post
export const deletePost = async (req, res) => {
  try {
    await pool.query('DELETE FROM blogs WHERE id = ?', [req.params.postId]);
    res.status(200).json({ 
      code: 200,
      message: 'Post eliminado exitosamente'
    });
  } catch (err) {
    res.status(500).json({ 
      code: 500,
      message: 'Error al eliminar el post',
      description: err.message 
    });
  }
};
