# 城市阳台

一座城市的根本是城市中的每个人。身处霓虹交织的世界，我们如何确定自己的坐标呢？

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
    max-width: 960px;
    margin: 1.5rem auto;
  }

  .photo-row--trio {
    grid-template-columns: repeat(3, 1fr);
    align-items: end;
    max-width: 1080px;
    margin: 1.5rem auto;
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
</style>

<div class="photo-row photo-row--duo">

<img src="cityPlatform02.jpg" alt="城市阳台 · 桥">
<img src="cityPlatform04.jpg" alt="城市阳台 · 圆顶">

</div>

<div class="photo-row photo-row--trio">

<img src="cityPlatform01.jpg" alt="城市阳台 · 高楼">
<img src="cityPlatform03.jpg" alt="城市阳台 · 车流">
<img src="cityPlatform05.jpg" alt="城市阳台 · 路灯">

</div>
