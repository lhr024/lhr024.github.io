# 早些时候

<style>
  .photo-row {
    display: grid;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .photo-row img {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    margin: 0;
    padding: 0.7rem;
    background: #fffdf9;
    border: 1px solid #e8e0d4;
    border-radius: 1px;
    box-shadow:
      0 0 0 3px #f5efe6,
      0 0 0 5px #d4c4a8,
      0 0 0 6px #b9a484,
      0 8px 22px rgba(88, 70, 48, 0.14);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .photo-row img:hover {
    transform: translateY(-3px);
    box-shadow:
      0 0 0 3px #f5efe6,
      0 0 0 5px #d4c4a8,
      0 0 0 6px #b9a484,
      0 12px 28px rgba(88, 70, 48, 0.2);
  }

  body[data-md-color-scheme="slate"] .photo-row img {
    padding: 0.7rem;
    background: #ece8e0;
    border: 1px solid #b8b0a4;
    box-shadow:
      0 0 0 3px #d8d2c8,
      0 0 0 5px #6e6558,
      0 0 0 6px #3a342c,
      0 8px 22px rgba(0, 0, 0, 0.42);
  }

  body[data-md-color-scheme="slate"] .photo-row img:hover {
    box-shadow:
      0 0 0 3px #d8d2c8,
      0 0 0 5px #6e6558,
      0 0 0 6px #3a342c,
      0 12px 28px rgba(0, 0, 0, 0.52);
  }

  .photo-row--duo {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
    margin: 1.5rem 0;
    align-items: start;
  }

  .photo-row--trio {
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
    margin: 1.5rem 0;
    align-items: start;
  }

  @media (max-width: 768px) {
    .photo-row,
    .photo-row.photo-row--duo,
    .photo-row.photo-row--trio {
      grid-template-columns: 1fr;
      max-width: none;
      margin: 1.5rem 0;
    }
  }

  .moon-intro {
    margin: 0 0 1.2rem;
    line-height: 1.9;
    color: inherit;
  }

  .moon-lyrics {
    margin: 0 0 2rem;
    padding: 1.2rem 1.4rem;
    border-left: 4px solid var(--kalxr-blue, #044ea2);
    background: rgba(4, 78, 162, 0.06);
    border-radius: 0 8px 8px 0;
    font-style: italic;
    letter-spacing: 0.06em;
    line-height: 2;
  }

  .moon-lyrics cite {
    display: block;
    margin-bottom: 0.6rem;
    font-style: normal;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    opacity: 0.65;
  }

  .moon-lyrics p {
    margin: 0;
  }

  body[data-md-color-scheme="slate"] .moon-lyrics {
    background: rgba(110, 180, 255, 0.08);
    border-left-color: #6eb4ff;
  }
</style>

## 杭州

<div class="photo-row">  <!-- 独占一行大图 -->

<img src="../ago/P2-1.JPG" alt="杭州">

</div>

<div class="photo-row photo-row--trio">  <!-- 后三张一行 -->

<img src="../ago/P2-2.JPG" alt="杭州">
<img src="../ago/P2-8.JPG" alt="杭州">
<img src="../ago/P2-9.JPG" alt="杭州">

</div>


<div class="photo-row">  <!-- 独占一行大图 -->

<img src="../ago/P2-3.JPG" alt="杭州">

</div>

<div class="photo-row photo-row--duo">  <!-- 前两张一行 -->

<img src="../ago/P2-4.JPG" alt="杭州">
<img src="../ago/P2-5.JPG" alt="杭州">

</div>

<div class="photo-row photo-row--trio">  <!-- 后三张一行 -->

<img src="../ago/P2-6.JPG" alt="杭州">
<img src="../ago/P2-7.JPG" alt="杭州">
<img src="../ago/P2-10.JPG" alt="杭州">

</div>

## 台州

<div class="photo-row">

<img src="../ago/P1-9.jpg" alt="台州">

</div>

<div class="photo-row photo-row--trio">

<img src="../ago/P1-2.JPG" alt="台州">
<img src="../ago/P1-4.JPG" alt="台州">
<img src="../ago/P1-7.JPG" alt="台州">

</div>
<div class="photo-row photo-row--duo">

<img src="../ago/P1-1.JPG" alt="台州">
<img src="../ago/P1-3.JPG" alt="台州">

</div>

<div class="photo-row photo-row--trio">

<img src="../ago/P1-5.JPG" alt="台州">
<img src="../ago/P1-6.JPG" alt="台州">
<img src="../ago/P1-8.JPG" alt="台州">

</div>

