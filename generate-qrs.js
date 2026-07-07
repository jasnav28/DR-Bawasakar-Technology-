import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';
import PDFDocument from 'pdfkit';

const domain = 'https://dr-bawasakar-technology.vercel.app';
const outputDir = path.join(process.cwd(), 'qr cods');

const products = [
  'GERMINATOR',
  'HARMONY',
  'SPLENDOUR',
  'THRIVER',
  'RIPENER',
  'PROTECTANT',
  'PRISOM',
  'NUTRATONE',
  'CROP SHINER'
];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateQRPDFs() {
  for (const product of products) {
    const url = `${domain}/${encodeURIComponent(product)}`;
    const pdfPath = path.join(outputDir, `${product}.pdf`);

    try {
      // Generate QR Code as a data URI (PNG)
      const qrDataURI = await QRCode.toDataURL(url, { width: 300, margin: 2 });
      
      // Convert Data URI to buffer
      const base64Data = qrDataURI.replace(/^data:image\/png;base64,/, "");
      const imgBuffer = Buffer.from(base64Data, 'base64');

      // Create a PDF document (square layout)
      const doc = new PDFDocument({ size: [400, 420], margin: 0 });
      doc.pipe(fs.createWriteStream(pdfPath));

      doc.moveDown(2);
      // Draw product name
      doc.fontSize(20).text(product, { align: 'center' });
      doc.moveDown(1);

      // Embed QR code image
      doc.image(imgBuffer, 50, doc.y, { width: 300 });

      doc.end();

      console.log(`Created ${product}.pdf`);
    } catch (err) {
      console.error(`Error generating PDF for ${product}:`, err);
    }
  }
}

generateQRPDFs();
