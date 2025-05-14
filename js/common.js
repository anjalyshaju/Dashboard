function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  }
  function toggleCard() {
    const card = document.getElementById('profileCard');
    card.style.display = card.style.display === 'block' ? 'none' : 'block';
  }
  function displayCard() {
    const card = document.getElementById('profileCards');
    card.style.display = card.style.display === 'block' ? 'none' : 'block';
  }

  window.addEventListener('click', function(e) {
    const card = document.getElementById('profileCard');
    const profile = document.querySelector('.user-profile');
    if (!profile.contains(e.target)) {
      card.style.display = 'none';
    }
  });
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });