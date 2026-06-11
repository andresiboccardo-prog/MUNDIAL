import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const [players, predictions, results] = await Promise.all([
        kv.get('players'),
        kv.get('predictions'),
        kv.get('results'),
      ]);
      return res.json({
        players: players || [],
        predictions: predictions || {},
        results: results || {},
      });
    }

    if (req.method === 'POST') {
      const { action, payload } = req.body;

      if (action === 'add_player') {
        let players = (await kv.get('players')) || [];
        if (!players.includes(payload.name)) {
          players.push(payload.name);
          await kv.set('players', players);
        }
        return res.json({ ok: true, players });
      }

      if (action === 'save_predictions') {
        const predictions = (await kv.get('predictions')) || {};
        predictions[payload.player] = payload.data;
        await kv.set('predictions', predictions);
        return res.json({ ok: true });
      }

      if (action === 'save_results') {
        const results = (await kv.get('results')) || {};
        Object.assign(results, payload.data);
        await kv.set('results', results);
        return res.json({ ok: true });
      }

      return res.status(400).json({ error: 'Unknown action' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
}
