// ===== DONNÉES DE TEST =====
const talentsData = [
    {
        id: 1,
        title: 'Jean Dupont',
        excerpt: 'Jeune talent prometteur en football, actuellement en formation.',
        sports: ['Football'],
        countries: ['France'],
        cities: ['Paris'],
        ages: ['18-21 ans'],
    },
    {
        id: 2,
        title: 'Marie Martin',
        excerpt: 'Joueuse de tennis talentueuse avec expérience en compétitions nationales.',
        sports: ['Tennis'],
        countries: ['France'],
        cities: ['Lyon'],
        ages: ['15-17 ans'],
    },
    {
        id: 3,
        title: 'Marco Rossi',
        excerpt: 'Athlète italien spécialisé en saut en hauteur, médaillé en compétitions régionales.',
        sports: ['Athlétisme'],
        countries: ['Italie'],
        cities: ['Milan'],
        ages: ['22-25 ans'],
    },
    {
        id: 4,
        title: 'Anna Schmidt',
        excerpt: 'Joueuse de volleyball allemande avec grande expérience en club.',
        sports: ['Volleyball'],
        countries: ['Allemagne'],
        cities: ['Berlin'],
        ages: ['22-25 ans'],
    },
    {
        id: 5,
        title: 'Carlos García',
        excerpt: 'Jeune joueur de basketball espagnol en développement constant.',
        sports: ['Basketball'],
        countries: ['Espagne'],
        cities: ['Madrid'],
        ages: ['18-21 ans'],
    },
    {
        id: 6,
        title: 'Sophie Lefevre',
        excerpt: 'Footballeuse avec expérience en championnat de France féminin.',
        sports: ['Football'],
        countries: ['France'],
        cities: ['Marseille'],
        ages: ['22-25 ans'],
    },
    {
        id: 7,
        title: 'Lucas Moreau',
        excerpt: 'Jeune basketteur avec potentiel de progression rapide.',
        sports: ['Basketball'],
        countries: ['France'],
        cities: ['Paris'],
        ages: ['15-17 ans'],
    },
    {
        id: 8,
        title: 'Elena Bianchi',
        excerpt: 'Joueuse de tennis italienne, prometteur talent junior.',
        sports: ['Tennis'],
        countries: ['Italie'],
        cities: ['Rome'],
        ages: ['12-14 ans'],
    },
    {
        id: 9,
        title: 'Thomas Petite',
        excerpt: 'Athlète belge spécialisé en sprint et sauts.',
        sports: ['Athlétisme'],
        countries: ['Belgique'],
        cities: ['Bruxelles'],
        ages: ['18-21 ans'],
    },
    {
        id: 10,
        title: 'Giuliana Conti',
        excerpt: 'Volleyleuse italienne avec expérience en compétitions régionales.',
        sports: ['Volleyball'],
        countries: ['Italie'],
        cities: ['Milan'],
        ages: ['22-25 ans'],
    },
    {
        id: 11,
        title: 'Pierre Blanc',
        excerpt: 'Footballeur français de l\'académie de Clairefontaine.',
        sports: ['Football'],
        countries: ['France'],
        cities: ['Paris'],
        ages: ['12-14 ans'],
    },
    {
        id: 12,
        title: 'Sophia Weber',
        excerpt: 'Joueuse de basketball allemande avec excellent potentiel offensif.',
        sports: ['Basketball'],
        countries: ['Allemagne'],
        cities: ['Berlin'],
        ages: ['18-21 ans'],
    },
];

// ===== APP =====
const app = {
    state: {
        selectedFilters: {},
        currentPage: 1,
        debounceTimer: null,
        postsPerPage: 10,
        allTalents: talentsData,
        savedSearches: [],
        filters: {
            sport_category: {
                label: 'Sport',
                terms: ['Football', 'Basketball', 'Tennis', 'Volleyball', 'Athlétisme'],
                key: 'sports',
            },
            country: {
                label: 'Pays',
                terms: ['France', 'Italie', 'Espagne', 'Allemagne', 'Belgique'],
                key: 'countries',
            },
            age_group: {
                label: 'Groupe d\'âge',
                terms: ['12-14 ans', '15-17 ans', '18-21 ans', '22-25 ans', '+25 ans'],
                key: 'ages',
            },
        },
    },

    elements: {
        searchInput: null,
        filtersContainer: null,
        resultsContainer: null,
        loadMoreBtn: null,
        resultsCount: null,
        pagination: null,
        saveSearchBtn: null,
        savedSearchesList: null,
        modalOverlay: null,
        modalInput: null,
        modalSaveBtn: null,
        modalCancelBtn: null,
    },

    init: function() {
        this.cacheElements();
        this.loadSavedSearches();
        this.buildFilters();
        this.bindEvents();
        this.loadTalents();
    },

    cacheElements: function() {
        this.elements.filtersContainer = document.getElementById('talent-filters-container');
        this.elements.resultsContainer = document.getElementById('talent-results');
        this.elements.loadMoreBtn = document.getElementById('talent-load-more');
        this.elements.resultsCount = document.getElementById('talent-results-count');
        this.elements.pagination = document.getElementById('talent-pagination');
        this.elements.saveSearchBtn = document.getElementById('talent-save-current-search');
        this.elements.savedSearchesList = document.getElementById('talent-saved-searches-list');
        this.elements.modalOverlay = document.getElementById('talent-modal-overlay');
        this.elements.modalInput = document.getElementById('talent-modal-input');
        this.elements.modalSaveBtn = document.getElementById('talent-modal-save');
        this.elements.modalCancelBtn = document.getElementById('talent-modal-cancel');
    },

    buildFilters: function() {
        let html = '';

        Object.keys(this.state.filters).forEach(taxonomy => {
            const filter = this.state.filters[taxonomy];
            html += `
                <div class="talent-filters-section">
                    <div class="talent-filters-title">
                        ${filter.label}
                        <button class="talent-clear-filters" data-taxonomy="${taxonomy}" style="display: none;">
                            Réinitialiser
                        </button>
                    </div>
                    <div class="talent-filter-dropdown">
                        <button class="talent-filter-dropdown-toggle" data-taxonomy="${taxonomy}">
                            <span class="talent-filter-dropdown-text">Sélectionner ${filter.label.toLowerCase()}</span>
                            <span class="talent-filter-dropdown-arrow">▼</span>
                        </button>
                        <div class="talent-filter-dropdown-menu" data-taxonomy="${taxonomy}">
            `;

            filter.terms.forEach(term => {
                html += `
                    <label class="talent-filter-dropdown-item">
                        <input type="checkbox" value="${term}" data-taxonomy="${taxonomy}">
                        <span>${this.escapeHtml(term)}</span>
                    </label>
                `;
            });

            html += `
                        </div>
                    </div>
                </div>
            `;
        });

        this.elements.filtersContainer.innerHTML = html;
    },

    bindEvents: function() {
        this.elements.loadMoreBtn.addEventListener('click', () => {
            this.loadMoreTalents();
        });

        // Gestion des dropdowns
        this.elements.filtersContainer.addEventListener('click', (e) => {
            // Toggle dropdown
            if (e.target.closest('.talent-filter-dropdown-toggle')) {
                const toggle = e.target.closest('.talent-filter-dropdown-toggle');
                const taxonomy = toggle.dataset.taxonomy;
                const menu = this.elements.filtersContainer.querySelector(
                    `.talent-filter-dropdown-menu[data-taxonomy="${taxonomy}"]`
                );

                // Fermer tous les autres dropdowns
                this.elements.filtersContainer.querySelectorAll('.talent-filter-dropdown-toggle').forEach(t => {
                    if (t !== toggle) {
                        t.classList.remove('active');
                    }
                });
                this.elements.filtersContainer.querySelectorAll('.talent-filter-dropdown-menu').forEach(m => {
                    if (m !== menu) {
                        m.classList.remove('active');
                    }
                });

                // Toggle le dropdown actuel
                toggle.classList.toggle('active');
                menu.classList.toggle('active');
            }

            // Clear filters
            if (e.target.classList.contains('talent-clear-filters')) {
                this.clearTaxonomyFilters(e.target.dataset.taxonomy);
            }
        });

        // Gestion des checkbox dans les dropdowns
        this.elements.filtersContainer.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const taxonomy = e.target.dataset.taxonomy;
                this.handleDropdownChange(taxonomy);
            }
        });

        // Fermer les dropdowns en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.talent-filter-dropdown')) {
                this.elements.filtersContainer.querySelectorAll('.talent-filter-dropdown-toggle').forEach(t => {
                    t.classList.remove('active');
                });
                this.elements.filtersContainer.querySelectorAll('.talent-filter-dropdown-menu').forEach(m => {
                    m.classList.remove('active');
                });
            }
        });

        this.elements.saveSearchBtn.addEventListener('click', () => {
            this.openSaveModal();
        });

        this.elements.modalSaveBtn.addEventListener('click', () => {
            this.confirmSaveSearch();
        });

        this.elements.modalCancelBtn.addEventListener('click', () => {
            this.closeSaveModal();
        });

        this.elements.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.elements.modalOverlay) {
                this.closeSaveModal();
            }
        });
    },

    handleSearch: function(e) {
        this.state.searchTerm = e.target.value.toLowerCase();
        this.state.currentPage = 1;

        clearTimeout(this.state.debounceTimer);
        this.state.debounceTimer = setTimeout(() => {
            this.loadTalents();
        }, 300);
    },

    handleDropdownChange: function(taxonomy) {
        const checkboxes = this.elements.filtersContainer.querySelectorAll(
            `input[type="checkbox"][data-taxonomy="${taxonomy}"]`
        );
        const selectedValues = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        if (selectedValues.length > 0) {
            this.state.selectedFilters[taxonomy] = selectedValues;
        } else {
            delete this.state.selectedFilters[taxonomy];
        }

        this.updateDropdownText(taxonomy);
        this.updateClearButtons();
        this.state.currentPage = 1;
        this.loadTalents();
    },

    updateDropdownText: function(taxonomy) {
        const toggle = this.elements.filtersContainer.querySelector(
            `.talent-filter-dropdown-toggle[data-taxonomy="${taxonomy}"]`
        );
        const textSpan = toggle.querySelector('.talent-filter-dropdown-text');
        const filter = this.state.filters[taxonomy];
        const selectedCount = this.state.selectedFilters[taxonomy]?.length || 0;

        if (selectedCount > 0) {
            textSpan.innerHTML = `${filter.label} <span class="talent-filter-selected-count">${selectedCount}</span>`;
        } else {
            textSpan.textContent = `Sélectionner ${filter.label.toLowerCase()}`;
        }
    },

    clearTaxonomyFilters: function(taxonomy) {
        if (this.state.selectedFilters[taxonomy]) {
            delete this.state.selectedFilters[taxonomy];

            // Décocher les checkboxes
            const checkboxes = this.elements.filtersContainer.querySelectorAll(
                `input[type="checkbox"][data-taxonomy="${taxonomy}"]`
            );
            checkboxes.forEach(cb => cb.checked = false);

            this.updateDropdownText(taxonomy);
            this.updateClearButtons();
            this.state.currentPage = 1;
            this.loadTalents();
        }
    },

    updateClearButtons: function() {
        const clearBtns = this.elements.filtersContainer.querySelectorAll('.talent-clear-filters');
        clearBtns.forEach(btn => {
            const taxonomy = btn.dataset.taxonomy;
            btn.style.display = this.state.selectedFilters[taxonomy] ? 'block' : 'none';
        });
    },

    filterTalents: function() {
        let filtered = this.state.allTalents.filter(talent => {
            // Filtres (tous les filtres sélectionnés doivent matcher)
            for (const taxonomy in this.state.selectedFilters) {
                const selectedTerms = this.state.selectedFilters[taxonomy];
                const filterConfig = this.state.filters[taxonomy];
                const talentKey = filterConfig.key;

                // Vérifier si au moins un terme sélectionné est dans le talent
                const hasMatch = selectedTerms.some(term =>
                    talent[talentKey].includes(term)
                );

                if (!hasMatch) return false;
            }

            return true;
        });

        return filtered;
    },

    loadTalents: function() {
        const filtered = this.filterTalents();
        const start = (this.state.currentPage - 1) * this.state.postsPerPage;
        const end = start + this.state.postsPerPage;
        const paginated = filtered.slice(0, end);

        this.renderTalents(paginated, filtered.length);
        this.updateSaveButtonState();
    },

    renderTalents: function(talents, totalCount) {
        if (talents.length === 0) {
            this.elements.resultsContainer.innerHTML = `
                <div class="talent-no-results">
                    <p>Aucun talent trouvé</p>
                </div>
            `;
            this.elements.resultsCount.textContent = '0 résultat';
            this.elements.pagination.classList.add('hidden');
            return;
        }

        let html = '';
        talents.forEach(talent => {
            html += `
                <article class="talent-card">
                    <div class="talent-card-header">
                        <div class="talent-card-title-section">
                            <h4 class="talent-card-title">${this.escapeHtml(talent.title)}</h4>
                            <div class="talent-card-sports">
                                ${talent.sports.map(sport =>
                                    `<span class="talent-tag talent-tag-sport">${this.escapeHtml(sport)}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="talent-card-body">
                        <p class="talent-card-excerpt">${this.escapeHtml(talent.excerpt)}</p>
                    </div>

                    <div class="talent-card-footer">
                        <div class="talent-card-info">
                            <div class="talent-card-info-item">
                                <span class="talent-info-label">Pays:</span>
                                <span class="talent-info-value">${this.escapeHtml(talent.countries.join(', '))}</span>
                            </div>
                            <div class="talent-card-info-item">
                                <span class="talent-info-label">Âge:</span>
                                <span class="talent-info-value">${this.escapeHtml(talent.ages.join(', '))}</span>
                            </div>
                        </div>
                        <a href="#" class="talent-card-link">Voir le profil →</a>
                    </div>
                </article>
            `;
        });

        this.elements.resultsContainer.innerHTML = html;

        // Mettre à jour le compteur
        const resultText = totalCount > 1 ? 'résultats' : 'résultat';
        this.elements.resultsCount.textContent = `${totalCount} ${resultText}`;

        // Gérer la pagination
        const maxPages = Math.ceil(totalCount / this.state.postsPerPage);
        if (maxPages > 1 && this.state.currentPage < maxPages) {
            this.elements.pagination.classList.remove('hidden');
            this.elements.loadMoreBtn.textContent = this.state.currentPage === 1 ? 'Voir tout' : 'Charger plus';
        } else {
            this.elements.pagination.classList.add('hidden');
        }
    },

    loadMoreTalents: function() {
        const filtered = this.filterTalents();
        const maxPages = Math.ceil(filtered.length / this.state.postsPerPage);

        if (this.state.currentPage < maxPages) {
            this.state.currentPage++;
        }

        const start = (this.state.currentPage - 1) * this.state.postsPerPage;
        const end = start + this.state.postsPerPage;
        const paginated = filtered.slice(0, end);

        this.renderTalents(paginated, filtered.length);
    },

    // SAUVEGARDE DES RECHERCHES
    loadSavedSearches: function() {
        const saved = localStorage.getItem('talent-saved-searches');
        this.state.savedSearches = saved ? JSON.parse(saved) : [];
        this.renderSavedSearches();
    },

    saveSavedSearches: function() {
        localStorage.setItem('talent-saved-searches', JSON.stringify(this.state.savedSearches));
    },

    renderSavedSearches: function() {
        if (this.state.savedSearches.length === 0) {
            this.elements.savedSearchesList.innerHTML = '<p style="font-size: 12px; color: #9ca3af; margin: 10px 0;">Aucune recherche sauvegardée</p>';
            return;
        }

        let html = '';
        this.state.savedSearches.forEach((search, index) => {
            html += `
                <div class="talent-saved-search-item">
                    <span class="talent-saved-search-name" data-index="${index}">
                        ${this.escapeHtml(search.name)}
                    </span>
                    <button class="talent-delete-saved" data-index="${index}">×</button>
                </div>
            `;
        });

        this.elements.savedSearchesList.innerHTML = html;

        // Événements
        this.elements.savedSearchesList.querySelectorAll('.talent-saved-search-name').forEach(el => {
            el.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.loadSavedSearch(index);
            });
        });

        this.elements.savedSearchesList.querySelectorAll('.talent-delete-saved').forEach(el => {
            el.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.deleteSavedSearch(index);
            });
        });
    },

    updateSaveButtonState: function() {
        const hasActiveFilters = Object.keys(this.state.selectedFilters).length > 0;
        this.elements.saveSearchBtn.disabled = !hasActiveFilters;
    },

    openSaveModal: function() {
        this.elements.modalInput.value = '';
        this.elements.modalOverlay.classList.add('active');
        this.elements.modalInput.focus();
    },

    closeSaveModal: function() {
        this.elements.modalOverlay.classList.remove('active');
    },

    confirmSaveSearch: function() {
        const name = this.elements.modalInput.value.trim();
        if (!name) {
            alert('Veuillez entrer un nom pour cette recherche');
            return;
        }

        const searchObject = {
            name: name,
            selectedFilters: JSON.parse(JSON.stringify(this.state.selectedFilters)),
        };

        this.state.savedSearches.push(searchObject);
        this.saveSavedSearches();
        this.renderSavedSearches();
        this.closeSaveModal();
    },

    loadSavedSearch: function(index) {
        const search = this.state.savedSearches[index];
        if (!search) return;

        // Restaurer les filtres
        this.state.selectedFilters = JSON.parse(JSON.stringify(search.selectedFilters));

        // Mettre à jour les checkboxes des dropdowns
        Object.keys(this.state.filters).forEach(taxonomy => {
            const checkboxes = this.elements.filtersContainer.querySelectorAll(
                `input[type="checkbox"][data-taxonomy="${taxonomy}"]`
            );
            const selectedTerms = this.state.selectedFilters[taxonomy] || [];

            checkboxes.forEach(checkbox => {
                checkbox.checked = selectedTerms.includes(checkbox.value);
            });

            this.updateDropdownText(taxonomy);
        });

        this.updateClearButtons();
        this.state.currentPage = 1;
        this.loadTalents();
    },

    deleteSavedSearch: function(index) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette recherche sauvegardée ?')) {
            this.state.savedSearches.splice(index, 1);
            this.saveSavedSearches();
            this.renderSavedSearches();
        }
    },

    escapeHtml: function(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    },
};

// Initialiser au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}
