Files yang tersedia:
File "1" adalah gambar asli dengan perubahan simplifikasi (kurva).
File "2" adalah gambar asli utuh.
File "3" adalah gambar pada proses rendering.
File "4" adalah gambar rendering dengan posisi vertex.
File "Konversi Vertex" mencari posisi vertex dari gambar asli.
File "Canvas Vertex" berisi detail perolehan vertex.

Penjelasan Canvas Vertex:
1. Ukuran A4(297 x 210)mm maka koordinat kartesius nya memiliki range sbX(-148.5,148.5) dan sbY(-105,105).
2. Normal X dan Normal Y didapat dari pengukuran.
3. Canvas(X) adalah posisi X pada canvas normal. Rumus nya Canvas(X) = NX - 148.5.
4. Canvas(Y) adalah posisi Y pada canvas normal. Rumus nya Canvas(Y) = 105 - NY.
5. Karena range pada canvas WebGL hanya (-1,1), maka perlu skalar dengan cara membagi semua nilai Canvas(X) dan Canvas(Y) dengan suatu konstanta bebas K.
6. Nilai K harus lebih dari max(ABS(Canvas(X)),ABS(Canvas(Y))). Nilai paling tinggi pada tabel yaitu 138.5, agar mempermudah perhitungan diambil K = 150.