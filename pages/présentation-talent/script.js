// Mock Data - Videos
const videos = [
    { id: 1, title: "Saison 2024 - Highlights Complets", duration: "10:32", views: "12k", date: "Il y a 2 jours", thumbnail: "bg-emerald-900" },
    { id: 2, title: "But incroyable vs Lyon U19", duration: "0:45", views: "8.5k", date: "Il y a 1 semaine", thumbnail: "bg-blue-900" },
    { id: 3, title: "Skills & Dribbles 2023", duration: "4:15", views: "21k", date: "Il y a 1 mois", thumbnail: "bg-indigo-900" },
    { id: 4, title: "Performance vs PSG Academy", duration: "8:10", views: "3.4k", date: "Il y a 2 mois", thumbnail: "bg-purple-900" },
    { id: 5, title: "Entraînement spécifique finition", duration: "2:30", views: "1.2k", date: "Il y a 3 mois", thumbnail: "bg-slate-800" },
    { id: 6, title: "Interview d'après match", duration: "1:15", views: "900", date: "Il y a 3 mois", thumbnail: "bg-zinc-800" },
    { id: 7, title: "Coupe Gambardella - 1/8 Finale", duration: "5:45", views: "5k", date: "Il y a 4 mois", thumbnail: "bg-neutral-800" },
    { id: 8, title: "Mes 5 plus beaux buts", duration: "3:20", views: "15k", date: "Il y a 5 mois", thumbnail: "bg-stone-800" },
    { id: 9, title: "Séance physique pré-saison", duration: "1:45", views: "2k", date: "Il y a 6 mois", thumbnail: "bg-gray-800" },
    { id: 10, title: "Tournoi International U18", duration: "6:10", views: "4.1k", date: "Il y a 7 mois", thumbnail: "bg-slate-900" },
    { id: 11, title: "Analyse tactique - Mon rôle", duration: "9:00", views: "1.5k", date: "Il y a 8 mois", thumbnail: "bg-emerald-950" },
    { id: 12, title: "Débuts en équipe réserve", duration: "3:30", views: "3k", date: "Il y a 1 an", thumbnail: "bg-blue-950" }
];

// Thumbnail color mapping
const thumbnailColors = {
    'bg-emerald-900': '#064e3b',
    'bg-blue-900': '#1e3a8a',
    'bg-indigo-900': '#312e81',
    'bg-purple-900': '#581c87',
    'bg-slate-800': '#1e293b',
    'bg-zinc-800': '#27272a',
    'bg-neutral-800': '#262626',
    'bg-stone-800': '#292524',
    'bg-gray-800': '#1f2937',
    'bg-slate-900': '#0f172a',
    'bg-emerald-950': '#022c22',
    'bg-blue-950': '#172554'
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    renderVideos();
});

// Tabs functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        });
    });
}

// Render videos in the highlights tab
function renderVideos() {
    const videosGrid = document.getElementById('videos-grid');
    if (!videosGrid) return;

    videosGrid.innerHTML = videos.map(video => `
        <div class="video-card" onclick="playVideo(${video.id})">
            <div class="video-thumbnail" style="background: ${thumbnailColors[video.thumbnail]};">
                <div class="video-overlay">
                    <svg class="play-icon" width="56" height="56" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                </div>
                <span class="video-duration">${video.duration}</span>
            </div>
        </div>
    `).join('');
}

// Handle video click
function playVideo(videoId) {
    console.log('Playing video:', videoId);
    // Here you would typically open a modal or redirect to video player
    alert(`Lecture de la vidéo ${videoId}\n(Intégration lecteur vidéo à venir)`);
}

// Handle contact button
function handleContact() {
    const toast = document.getElementById('contactToast');
    if (!toast) return;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Smooth scroll for anchors (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that need scroll animations
document.querySelectorAll('.video-card, .stats-card, .strength-item, .achievement-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
});
