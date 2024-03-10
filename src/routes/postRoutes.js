import express from 'express';
import {
  getAllPosts, getPostById, createPost, updatePost, deletePost,
} from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:postId', getPostById);

router.post('/', createPost);

router.put('/:postId', updatePost);

router.delete('/:postId', deletePost);

export default router;


/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - name_device
 *         - resolution_eye
 *         - relase_date
 *         - field_view
 *         - weight
 *         - relase_price
 *       properties:
 *         id:
 *           type: integer
 *           description: El ID auto generado del post.
 *         name_device:
 *           type: string
 *           description: Nombre del dispositivo.
 *         resolution_eye:
 *           type: string
 *           description: Resolución por ojo del dispositivo VR.
 *         relase_date:
 *           type: string
 *           format: date
 *           description: Fecha de lanzamiento del dispositivo.
 *         field_view:
 *           type: integer
 *           description: Campo de visión del dispositivo.
 *         weight:
 *           type: number
 *           description: Peso del dispositivo.
 *         relase_price:
 *           type: number
 *           description: Precio de lanzamiento del dispositivo.
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Lista todos los posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: El listado de todos los posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Obtiene un post por su ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del post
 *     responses:
 *       200:
 *         description: Un post encontrado por su ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post no encontrado
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Crea un nuevo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Post creado exitosamente
 */

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Actualiza un post por su ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del post a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post actualizado exitosamente
 *       404:
 *         description: Post no encontrado
 */

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Elimina un post por su ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del post a eliminar
 *     responses:
 *       200:
 *         description: Post eliminado exitosamente
 *       404:
 *         description: Post no encontrado
 */
