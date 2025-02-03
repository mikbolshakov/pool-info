import fs from 'fs';
import path from 'path';

export default function saveData(fileName: string, data: any, dirName: string) {
  try {
    const dirPath = path.resolve(__dirname, '../..', dirName);
    fs.mkdirSync(dirPath, { recursive: true });

    const filePath = path.join(dirPath, fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log(`${fileName} saved in ${dirName}`);
  } catch (error) {
    console.error(`Error saving file ${fileName}:`, (error as Error).message);
  }
}
