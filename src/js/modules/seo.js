const META_TRANSLATIONS = {
    pl: {
        title: 'Starko - Transport towarów w Polsce i UE',
        description: 'Transport towarów od 100 kg do 1200 kg w całej Polsce i UE. Szybkość, precyzja, bezpieczeństwo – gwarancja Starko!',
        ogTitle: 'Starko - Transport towarów w Polsce i UE',
        ogDescription: 'Profesjonalny transport towarów z gwarancją bezpieczeństwa i punktualności.',
        ogImage: '/logo.svg'
    },
    en: {
        title: 'Starko - Cargo Transportation in Poland and EU',
        description: 'Cargo transportation from 100 kg to 1200 kg across Poland and EU. Speed, precision, safety – Starko guarantee!',
        ogTitle: 'Starko - Cargo Transportation in Poland and EU',
        ogDescription: 'Professional cargo transportation with safety and punctuality guarantee.',
        ogImage: '/logo.svg'
    },
    ua: {
        title: 'Starko - Перевезення вантажів у Польщі та ЄС',
        description: 'Перевезення вантажів від 100 кг до 1200 кг по всій Польщі та ЄС. Швидкість, точність, безпека – гарантія Starko!',
        ogTitle: 'Starko - Перевезення вантажів у Польщі та ЄС',
        ogDescription: 'Професійні вантажні перевезення з гарантією безпеки та пунктуальності.',
        ogImage: '/logo.svg'
    }
};

export function updateMetaTags() {
    const currentLang = languageStore.getCurrentLanguage();
    const meta = META_TRANSLATIONS[currentLang];
    
    // Update title and meta description
    document.title = meta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
    
    // Update Open Graph tags
    document.querySelector('meta[property="og:title"]').setAttribute('content', meta.ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', meta.ogDescription);
    document.querySelector('meta[property="og:image"]').setAttribute('content', meta.ogImage);
    
    // Update Twitter Card tags
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', meta.ogTitle);
    document.querySelector('meta[property="twitter:description"]').setAttribute('content', meta.description);
    document.querySelector('meta[property="twitter:image"]').setAttribute('content', meta.ogImage);
    
    // Update canonical and alternate links
    const baseUrl = 'https://starko.pl';
    const currentPath = currentLang === 'pl' ? '' : `/${currentLang}`;
    
    document.querySelector('link[rel="canonical"]').setAttribute('href', `${baseUrl}${currentPath}/`);
}
