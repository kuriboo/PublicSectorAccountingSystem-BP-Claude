import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const srcDir = path.join(process.cwd(), 'src');
      const files = getTsxFiles(srcDir);
      res.status(200).json(files);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tsx files' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function getTsxFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getTsxFiles(filePath));
    } else if (
      filePath.endsWith('.tsx') && 
      !filePath.includes('components') && 
      !filePath.includes('pages/api') &&
      !filePath.includes('pages/_')
    ) {
      // ファイルパスを適切な形式に変換
      const relativePath = path.relative(process.cwd(), filePath)
        .replace(/\\/g, '/') // バックスラッシュをフォワードスラッシュに置換
        .replace(/^src\/aiConvertSrc\//, '') // 先頭の 'src/aiConvertSrc/' を除去
        .replace(/\.tsx$/, ''); // 末尾の '.tsx' を除去
      results.push(relativePath);
    }
  });

  return results;
}