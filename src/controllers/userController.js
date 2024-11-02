import { pool } from '../config/db.js'

export const getUser = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users')
        res.status(200).json(result.rows)
    } catch {
        res.status(500).json({ "error": "something went wrong" })
    }
}

export const createUser = async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    try {
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        res.status(201).json(result.rows[0])
     } catch {
        res.status(500).json({ "error": "something went wrong" })
     }
}

export const updateUser = async (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    try {
        const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id])
        res.status(200).json(result.rows[0]);
    } catch {
        res.status(500).json({ "error": "something went wrong" })
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await pool.query(`DELETE FROM users WHERE id = $1`, [id])
        res.status(204).send()
    } catch {
        res.status(500).json({ "error": "something went wrong" })
    }
}