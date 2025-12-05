// 首页：生成剧集按钮（1-50集）
window.onload = function() {
  // 若为首页，渲染剧集列表
  if (window.location.pathname.includes('index.html')) {
    const episodeList = document.getElementById('episodeList');
    for (let i = 1; i <= 50; i++) {
      const btn = document.createElement('button');
      btn.className = 'episode-btn';
      btn.innerText = '第' + i + '集';
      btn.onclick = function() {
        // 存储当前剧集和标题
        localStorage.setItem('currentEpisode', i);
        localStorage.setItem('animeTitle', '火影忍者 疾风传');
        // 跳转到播放页
        window.location.href = 'play.html';
      };
      // 第1集默认选中
      if (i === 1) btn.classList.add('active');
      episodeList.appendChild(btn);
    }
  }

  // 若为分类页，渲染动漫列表
  if (window.location.pathname.includes('category.html')) {
    switchCategory('hot'); // 默认显示热门动漫
  }
};

// 分类页：切换分类
function switchCategory(type) {
  // 切换按钮样式
  const btns = document.querySelectorAll('.category-btn');
  btns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // 模拟不同分类的动漫数据
  let animeData = [];
  if (type === 'hot') {
    animeData = [
      {name: '火影忍者 疾风传', cover: 'img/cover2.jpg'},
      {name: '海贼王', cover: 'img/cover2.jpg'},
      {name: '咒术回战', cover: 'img/cover2.jpg'},
      {name: '鬼灭之刃', cover: 'img/cover2.jpg'}
    ];
  } else if (type === 'new') {
    animeData = [
      {name: '间谍过家家 第二季', cover: 'img/cover2.jpg'},
      {name: '电锯人', cover: 'img/cover2.jpg'},
      {name: '蓝色监狱', cover: 'img/cover2.jpg'}
    ];
  } else if (type === 'classic') {
    animeData = [
      {name: '名侦探柯南', cover: 'img/cover2.jpg'},
      {name: '哆啦A梦', cover: 'img/cover2.jpg'},
      {name: '蜡笔小新', cover: 'img/cover2.jpg'}
    ];
  }

  // 渲染动漫列表
  const animeList = document.getElementById('animeList');
  animeList.innerHTML = '';
  animeData.forEach(anime => {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.onclick = function() {
      // 跳转到首页（模拟选中该动漫）
      localStorage.setItem('animeTitle', anime.name);
      window.location.href = 'index.html';
    };
    card.innerHTML = `
      <img src="${anime.cover}" class="anime-cover" alt="${anime.name}">
      <div class="anime-name">${anime.name}</div>
    `;
    animeList.appendChild(card);
  });
}