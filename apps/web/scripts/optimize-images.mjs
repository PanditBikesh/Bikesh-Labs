import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.resolve("src/assets/images/projects");
const outputDir = path.resolve("src/assets/images/projects/optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

for (const file of files) {
  const inputPath = path.join(inputDir, file);

  if (!/\.(png|jpg|jpeg)$/i.test(file)) {
    continue;
  }

  const outputName = file.replace(
    /\.(png|jpg|jpeg)$/i,
    ".webp"
  );

  const outputPath = path.join(outputDir, outputName);

  try {
    await sharp(inputPath)
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .webp({
        quality: 82,
      })
      .toFile(outputPath);

    console.log(`Optimized: ${file} → ${outputName}`);
  } catch (error) {
    console.error(`Skipped: ${file}`);
    console.error(error.message);
  }
}

console.log("Image optimization completed.");