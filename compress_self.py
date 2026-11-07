import os
from PIL import Image, ImageOps

d = "docs/photos/winter/local"
for f in sorted(os.listdir(d)):
    p = os.path.join(d, f)
    if not f.lower().endswith((".jpg", ".jpeg", ".png")):
        continue
    before = os.path.getsize(p)
    im = Image.open(p)
    im.seek(0)  # MPO: primary frame
    im = ImageOps.exif_transpose(im)  # bake orientation
    if max(im.size) > 2560:
        im.thumbnail((2560, 2560), Image.LANCZOS)
    im = im.convert("RGB")
    # keep the exact original filename for JPEGs (Windows paths are
    # case-insensitive: writing "P1-1.jpg" over "P1-1.JPG" is the SAME file)
    out = os.path.splitext(p)[0] + ".jpg" if f.lower().endswith(".png") else p
    im.save(out + ".tmp", "JPEG", quality=85, optimize=True)  # EXIF stripped
    os.replace(out + ".tmp", out)
    if out != p:
        os.remove(p)
    print(f, "->", os.path.basename(out), im.size,
          f"{before/1e6:.1f}MB -> {os.path.getsize(out)/1e6:.1f}MB")
