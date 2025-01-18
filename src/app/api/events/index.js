import { connectToDatabase } from '../../../lib/db';

export default async function handler(req, res) {
    const { method } = req;
    const connection = await connectToDatabase();

    switch (method) {
        case 'GET': // Fetch all events
            try {
                const [rows] = await connection.execute('SELECT * FROM events');
                res.status(200).json({ success: true, data: rows });
            } catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
            break;

        case 'POST': // Add a new events
            try {
                const { name, email } = req.body;
                await connection.execute('INSERT INTO events (name, email) VALUES (?, ?)', [name, email]);
                res.status(201).json({ success: true, message: 'Event added successfully' });
            } catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
            break;

        default:
            res.status(405).json({ success: false, message: 'Method not allowed' });
            break;
    }
}
