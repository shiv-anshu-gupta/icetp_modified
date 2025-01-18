import { connectToDatabase } from '../../../lib/db';

export default async function handler(req, res) {
    const { method, query: { id } } = req;
    const connection = await connectToDatabase();

    switch (method) {
        case 'GET': // Fetch a event by ID
            try {
                const [rows] = await connection.execute('SELECT * FROM events WHERE id = ?', [id]);
                if (rows.length === 0) {
                    return res.status(404).json({ success: false, message: 'Event not found' });
                }
                res.status(200).json({ success: true, data: rows[0] });
            } catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
            break;

        case 'PUT': // Update a event
            try {
                const { name, email } = req.body;
                await connection.execute('UPDATE events SET name = ?, email = ? WHERE id = ?', [name, email, id]);
                res.status(200).json({ success: true, message: 'Event updated successfully' });
            } catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
            break;

        case 'DELETE': // Delete a event
            try {
                await connection.execute('DELETE FROM events WHERE id = ?', [id]);
                res.status(200).json({ success: true, message: 'Event deleted successfully' });
            } catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
            break;

        default:
            res.status(405).json({ success: false, message: 'Method not allowed' });
            break;
    }
}
