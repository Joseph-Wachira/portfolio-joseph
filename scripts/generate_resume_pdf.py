from pathlib import Path

root = Path(__file__).resolve().parent.parent
output_path = root / 'public' / 'resume.pdf'
output_path.parent.mkdir(exist_ok=True)

content_stream = (
    b'BT\n'
    b'/F1 16 Tf\n'
    b'72 720 Td\n'
    b'(Joseph Wachira) Tj\n'
    b'0 -24 Td\n'
    b'(Software Engineer | Fullstack Developer) Tj\n'
    b'0 -24 Td\n'
    b'(Email: josephwachira505@gmail.com) Tj\n'
    b'0 -24 Td\n'
    b'(Portfolio: josephwachira.dev) Tj\n'
    b'ET\n'
)

objects = []
objects.append((1, b'<< /Type /Catalog /Pages 2 0 R >>'))
objects.append((2, b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>'))
objects.append((3, b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>'))
objects.append((4, f'<< /Length {len(content_stream)} >>\nstream\n'.encode('latin-1') + content_stream + b'endstream'))
objects.append((5, b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'))

pdf = bytearray(b'%PDF-1.4\n')
offsets = [0]
for obj_id, body in objects:
    offsets.append(len(pdf))
    pdf.extend(f'{obj_id} 0 obj\n'.encode('latin-1'))
    pdf.extend(body if isinstance(body, bytes) else body.encode('latin-1'))
    pdf.extend(b'\nendobj\n')

xref_offset = len(pdf)
pdf.extend(b'xref\n')
pdf.extend(f'0 {len(objects) + 1}\n'.encode('latin-1'))
pdf.extend(b'0000000000 65535 f \n')
for offset in offsets[1:]:
    pdf.extend(f'{offset:010d} 00000 n \n'.encode('latin-1'))
pdf.extend(b'trailer\n')
pdf.extend(f'<< /Size {len(objects) + 1} /Root 1 0 R >>\n'.encode('latin-1'))
pdf.extend(b'startxref\n')
pdf.extend(f'{xref_offset}\n'.encode('latin-1'))
pdf.extend(b'%%EOF')

output_path.write_bytes(pdf)
print(f'Created {output_path}')
